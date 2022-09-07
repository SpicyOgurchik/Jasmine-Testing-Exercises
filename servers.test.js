describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server table on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let tdName = document.querySelector('#serverTable td');
    expect(tdName.innerText).toEqual('Alice');

    let tdEarnings = document.querySelectorAll('#serverTable td');
    expect(tdEarnings[1].innerText).toEqual('$0.00');
  
  });

  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});

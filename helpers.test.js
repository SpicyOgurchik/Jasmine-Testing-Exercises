describe("Helpers test", function() {
    beforeEach(function () {
        billAmtInput.value = 500;
        tipAmtInput.value = 50;
    });
  
    it('should calculate tip percent on calculateTipPercent()', function () {
        expect(calculateTipPercent(500, 50)).toEqual(10);
      });

    it('should sum bill amount of all payments on sumPaymentTotal()', function () {
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(500);
    });

    it('should create tr and append td with a value on appendTd(tr, value)', function () {
        let tr = document.createElement('tr');
        appendTd(tr, 'qwe');
        expect(tr.firstChild.innerText).toEqual('qwe');
    });
  
    afterEach(function() {
        allPayments = {};
        paymentId = 0;
        serverTbody.innerHTML = '';
        billAmtInput.value  = '';
        tipAmtInput.value = '';
        paymentForm.innerHTML = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
  });
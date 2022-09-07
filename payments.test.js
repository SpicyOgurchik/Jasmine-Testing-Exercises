describe("Payments test", function() {
    beforeEach(function () {
        billAmtInput.value = 500;
        tipAmtInput.value = 50;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(allPayments['payment1'].billAmt).toEqual('500');
    });

    it('should create a payment on createCurPayment()', function () {
        let payment = {billAmt: '500',tipAmt: '50',tipPercent: 10}
    
        expect(createCurPayment()).toEqual(payment);
      });
  
    it('should append payment to payment table on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        appendPaymentTable(curPayment);
    
        let payment = document.querySelector('#paymentTable td');
    
        expect(payment.innerText).toEqual('$500');
    });
  
    afterEach(function() {
      allPayments = {};
      paymentId = 0;
      billAmtInput.value  = '';
      tipAmtInput.value = '';
      paymentForm.innerHTML = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
    });
  });
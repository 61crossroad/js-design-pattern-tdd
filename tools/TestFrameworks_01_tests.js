describe('createReservation(passenger, flight)', function() {
    it('When passenger is given, assign it to the property', function() {
        var testPassenger = {
            firstName: '승환',
            lastName: '김'
        };

        var testFlight = {
            number: '3443',
            carrier: '대한항공',
            destination: '울산'
        };

        var reservation = createReservation(testPassenger, testFlight);
        expect(reservation.passengerInfo).toBe(testPassenger);
    });

    it('When flight is given, assign it to the flightInfo', function() {
        var testPassenger = {
            firstName: '승환',
            lastName: '김'
        };

        var testFlight = {
            number: '3443',
            carrier: '대한항공',
            destination: '울산'
        };

        var reservation = createReservation(testPassenger, testFlight);
        expect(reservation.flightInfo).toBe(testFlight);
    });
});

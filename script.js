function validateCreditCard(card_number) {

    // Removing spaces and dashes from the card number
    cardNumber = card_number.replace(/[\s-]/g, '');

    
    // check if the card number has a valid length
    if (cardNumber.length < 13 || cardNumber.length > 19) {
        console.log('invalid card number')
    }


    // Check if the card number contains only digits
    if (!/^\d+$/.test(cardNumber)) {
        return "Invalid characters in the card number.";
    }

    var cardType = getCardTyp(cardNumber)

    var validatelughAlgorithm = validateLughalgorithm(cardNumber)

    if (!validateLughalgorithm) {
        return "failed lugh algorithm test, invalid account number"
    }


    return `This is a valid ${cardType} credit card number`

}


function getCardTyp(card_number) {
    // Define regex patterns for different card types
    var visaPattern = /^4/;
    var mastercardPattern = /^5[1-5]/;


    if (visaPattern.test(card_number)) {
        return "Visa";
    } else if (mastercardPattern.test(card_number)) {
        return "MasterCard";
    } else {
        return "Unknown"
    }
}


function validateLughalgorithm(cardNumber) {
    // Check the Luhn algorithm
    let sum = 0;
    let doubleDigit = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i], 10);

        if (doubleDigit) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        doubleDigit = !doubleDigit;
    }

    return sum % 10 === 0;
}


console.log(validateCreditCard('1234 5678 0989 8474'))

// Explanation
// first i created a funtion called validateCardNummber that takes as string card_number asthe argument
// first we use regular expression to find white spaces in the string  and removed it
// then in the next step whe cheeck if the card number length is less then 19 and greter than 13
// then we check if the card numbr contains any digit use regex which says match the string if every character is a digit
// We then check if the card is a master card or visa card via the regex
// and finally validate iugh algorithm which is known as the modulus 10 or mod 10 algorithm to determine if the credit card is valid
// The Luhn algorithm is a simple checksum formula used to validate various identification numbers, including credit card numbers.
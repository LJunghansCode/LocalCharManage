class ValidateInput {
    //Basic Text Validation Class, return an object with error message
    checkValidEmail(emailToCheck){
        let messageObject = {};
        const emailRegex = new RegExp("^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$");
        // -1 is the fail return of 'search()' method from strings.
        if(emailToCheck.search(emailRegex) === -1){
            messageObject.passed = false;
            messageObject.errorMessage = "Please enter a valid e-mail";
        } else if (emailToCheck.length <= 2){
            messageObject.passed = false;
            messageObject.errorMessage = "Please enter a valid e-mail at least longer than 2 characters";
        } else {
            messageObject.passed = true;
            messageObject.errorMessage = " ";
        }
        //Return the object and ask for 'passed' truthyness
        return messageObject;
    }
    
    checkValidPassword(passToCheck){
        let messageObject = {};
        if (passToCheck.length < 6) {
            messageObject.passed = false;
            messageObject.errorMessage = "Password must be longer than 6 characters";
        }
        else {
            messageObject.passed = true;
            messageObject.errorMessage = "Thanks!";
        }
        return messageObject;
    }
}
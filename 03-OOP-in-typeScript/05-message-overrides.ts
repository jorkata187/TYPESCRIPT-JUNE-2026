class Message{
    send(): string {
        return 'Sending message...';
    }
};

class EmailMessage extends Message{
    override send() {
        return 'Sending email...'
    }
};

class SMSMessage extends Message{
    override send() {
        return 'Sending SMS...'
    }
};
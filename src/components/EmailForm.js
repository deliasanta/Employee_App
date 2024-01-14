// src/components/EmailForm.js
import React, {useState} from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
} from '@mui/material';

const EmailForm = ({onClose, onSendEmail, resetSelectedPersons}) => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSendEmail = () => {
        if (subject.trim() === '' || message.trim() === '') {
            alert('Subject și Message sunt obligatorii.');
            return;
        }
        onSendEmail(subject, message);
        resetSelectedPersons();
        onClose();
    };

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Send Email</DialogTitle>
            <DialogContent>
                <TextField
                    label="Subject"
                    fullWidth
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="primary" onClick={handleSendEmail}>
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EmailForm;
"use server"
import { ContactData } from "@/app/types/types";

const Pushover = require('node-pushover');

const push = new Pushover({
	token: process.env.PUSHOVER_API_KEY,
	user: process.env.USER_KEY_ONE
});

export const sendContactMessage = async (data: ContactData) => {
    const title = `Contact Inquiry from ${data.firstName} ${data.lastName}`;

    const message = `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\n \n ${data.message}`;

    push.send(
        title,
        message
    );
};
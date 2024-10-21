"use server"
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

export const checkConfig = async () => {
  const response = await mailchimp.ping.get();
  console.log(response);
}

export const addToWaitlist = async (email: string) => {
  const response = await mailchimp.lists.addListMember(audienceId, {
    email_address: email,
    status: "subscribed",
  });
  
  console.log(response);
}
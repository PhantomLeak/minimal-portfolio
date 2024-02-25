import React from "react";
import { TextInput, Textarea, Button } from '@mantine/core';

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto mt-3">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/50e4ec41-f71d-4c0a-9fdb-f13e0e85a0e8"
          method="POST"
          className="flex flex-col w-full"
        >
          <span className="text-white text-2xl mb-2 underline font-bold">
            <i className="fa-solid fa-envelope fa-xs mr-2" />
            Contact Me
          </span>
          <TextInput
            radius="md"
            name="name"
            placeholder="Name"
            className="mb-3"
          />
          <TextInput
            radius="md"
            name="email"
            className="mb-3"
            placeholder="Email"
          />
          <Textarea
            size="md"
            name="message"
            className="mb-3"
            placeholder="Message"
          />
          
          <Button variant="outline"
          color="rgba(255, 255, 255, 1)" type="submit">Contact Me</Button>;
        </form>
      </div>
    </div>
  );
}

export default Contact;

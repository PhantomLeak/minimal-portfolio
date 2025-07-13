import React from "react";
import { TextInput, Textarea, Button, Group } from '@mantine/core';

function Contact() {
  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
        <i className="fa-solid fa-envelope fa-xs mr-3 text-accent-light" />
        <span className="accent-underline">Get In Touch</span>
      </h2>
      
      <div className="modern-card p-6 md:p-8 max-w-2xl mx-auto">
        <form
          action="https://getform.io/f/50e4ec41-f71d-4c0a-9fdb-f13e0e85a0e8"
          method="POST"
          className="space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-1">Name</label>
              <TextInput
                name="name"
                placeholder="Your name"
                className="w-full"
                styles={{
                  input: {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    '&:focus': {
                      borderColor: '#64b3f4',
                    },
                  }
                }}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-1">Email</label>
              <TextInput
                name="email"
                placeholder="your.email@example.com"
                className="w-full"
                styles={{
                  input: {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    '&:focus': {
                      borderColor: '#64b3f4',
                    },
                  }
                }}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-1">Message</label>
            <Textarea
              name="message"
              placeholder="Your message"
              minRows={5}
              styles={{
                input: {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  '&:focus': {
                    borderColor: '#64b3f4',
                  },
                }
              }}
            />
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit"
              className="modern-button w-full md:w-auto"
              styles={{
                root: {
                  background: 'linear-gradient(90deg, #64b3f4 0%, #c2e59c 100%)',
                  border: 'none',
                  color: '#1a1f25',
                  fontWeight: 600,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 15px rgba(100, 179, 244, 0.4)',
                  }
                }
              }}
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from 'react';
import {Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import './style/Definition.css'
    
function Definition(props) {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
  
    return (
      <div style={{background:'#6b7880',padding: '130px 0px'}} className="mt-5">
        <Accordion flush open={open} toggle={toggle}>
          <AccordionItem style={{backgroundColor:'#6b7880'}}>
            <AccordionHeader style={{backgroundColor:'#6b7880'}} targetId="1">Accordion Item 1</AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>This is the first item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  
    
    export default Definition;

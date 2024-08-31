import React from 'react'
import { Accordion } from '../Accordion/Accordion'
import { AccordionItem } from '../Accordion/AccordionItem'
import { AccordionHeader } from '../Accordion/AccordionHeader' 
import { AccordionPanel } from '../Accordion/AccordionPanel'

const ExperienceList = () => {
  return (
    <div><section className="App">
      <h2>Collapsible</h2>
      <Accordion>
        {[...Array(2)].map((_, i) => (
          <AccordionItem key={i}>
            <AccordionHeader>Accordion {i + 1}</AccordionHeader>
            <AccordionPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
              explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
              aspernatur quisquam illo! Officiis explicabo laborum incidunt
              corrupti provident esse eligendi.
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <br />

      <h2>Multiple</h2>
      <Accordion multiple>
        {[...Array(2)].map((_, i) => (
          <AccordionItem key={i}>
            <AccordionHeader>Accordion {i + 1}</AccordionHeader>
            <AccordionPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod
              explicabo, nam sapiente id nostrum ex, ab numquam, doloremque
              aspernatur quisquam illo! Officiis explicabo laborum incidunt
              corrupti provident esse eligendi.
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section></div>
  )
}

export default ExperienceList
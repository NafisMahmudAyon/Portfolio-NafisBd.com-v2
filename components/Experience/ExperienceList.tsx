import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from 'nexus-accordion'
import React from 'react'


const ExperienceList = () => {
  const data = [
    {title: "title-1", panel: "panel-1"},
    {title: "title-2", panel: "panel-2"}
  ]
  return (
    <div><section className="App">
      <h2>Collapsible</h2>
      <Accordion className=''>
        {data.map((_, i) => (
          <AccordionItem key={i}>
            <AccordionHeader>{_.title}</AccordionHeader>
            <AccordionPanel>
              {_.panel}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <br />

      <h2>Multiple</h2>
      <Accordion multiple>
        {data.map((_, i) => (
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
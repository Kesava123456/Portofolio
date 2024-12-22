import React from "react";
import content from "/React project/my-app/src/portofolio/Expirence/content"
import Item from "/React project/my-app/src/portofolio/Expirence/item"
export default function index() {
  return (
    <>
      <div className="container-timeline">
        {content.map((item, index) => (
          <Item data={item} key={item.title} index={index}/>
        ))}
      </div>
      <style jsx>{`
        .container-timeline {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          counter-reset: contador;
          margin: 3rem auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          margin-bottom: 8rem;
        }
      `}</style>
    </>
  );
}
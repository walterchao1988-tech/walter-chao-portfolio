
import React from "react";

export default function App() {
  return (
    <main style={{
      background:"#020617",
      color:"white",
      minHeight:"100vh",
      fontFamily:"Arial, sans-serif",
      padding:"60px"
    }}>
      <h1 style={{fontSize:"64px"}}>Walter Chao</h1>

      <h2 style={{fontSize:"32px",color:"#67e8f9"}}>
        Automatización comercial y sistemas operativos para PyMEs
      </h2>

      <p style={{
        maxWidth:"900px",
        lineHeight:"1.8",
        marginTop:"30px",
        fontSize:"20px",
        color:"#cbd5e1"
      }}>
        Desarrollo plataformas y automatizaciones para PyMEs que integran ventas,
        logística, WhatsApp, POS, reportes y procesos comerciales reales.
      </p>

      <section style={{marginTop:"80px"}}>
        <h3 style={{fontSize:"42px"}}>Impacto real</h3>

        <ul style={{lineHeight:"2",fontSize:"18px"}}>
          <li>Mejor comunicación con clientes</li>
          <li>Automatización de tareas repetitivas</li>
          <li>Fidelización y promociones</li>
          <li>Más ventas y rentabilidad</li>
          <li>Información objetiva para decidir mejor</li>
        </ul>
      </section>

      <section style={{marginTop:"80px"}}>
        <h3 style={{fontSize:"42px"}}>Proyectos</h3>

        <div style={{
          border:"1px solid #1e293b",
          borderRadius:"24px",
          padding:"30px",
          background:"#0f172a",
          marginTop:"30px"
        }}>
          <h4 style={{fontSize:"28px"}}>C&M Turismo</h4>
          <p style={{color:"#cbd5e1"}}>
            Plataforma operativa para turismo mayorista.
          </p>
        </div>

        <div style={{
          border:"1px solid #1e293b",
          borderRadius:"24px",
          padding:"30px",
          background:"#0f172a",
          marginTop:"30px"
        }}>
          <h4 style={{fontSize:"28px"}}>Aqua Natura</h4>
          <p style={{color:"#cbd5e1"}}>
            Ecosistema operativo para distribución y reparto.
          </p>
        </div>
      </section>

      <section style={{marginTop:"80px"}}>
        <h3 style={{fontSize:"42px"}}>Contacto</h3>

        <p>WhatsApp: 3541 22 5990</p>

        <a
          href="https://www.linkedin.com/in/walter-chao88/"
          style={{color:"#67e8f9"}}
        >
          LinkedIn
        </a>
      </section>
    </main>
  );
}

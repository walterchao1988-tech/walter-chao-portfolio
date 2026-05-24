
import React from "react";

export default function App() {
  return (
    <main style={{
      background:"#020617",
      color:"#fff",
      minHeight:"100vh",
      fontFamily:"Arial, sans-serif"
    }}>

      <section style={{
        padding:"80px 10%",
        borderBottom:"1px solid #1e293b"
      }}>
        <p style={{
          color:"#67e8f9",
          textTransform:"uppercase",
          letterSpacing:"2px"
        }}>
          Optimización operativa · Automatización · Rentabilidad
        </p>

        <h1 style={{
          fontSize:"72px",
          marginTop:"20px",
          marginBottom:"10px"
        }}>
          Walter Chao
        </h1>

        <h2 style={{
          fontSize:"34px",
          color:"#cbd5e1",
          maxWidth:"900px",
          lineHeight:"1.4"
        }}>
          Ayudo a PyMEs a vender más y operar mejor mediante automatización,
          procesos y tecnología aplicada.
        </h2>

        <p style={{
          marginTop:"30px",
          maxWidth:"900px",
          fontSize:"20px",
          color:"#94a3b8",
          lineHeight:"1.8"
        }}>
          Mi enfoque combina operación real, experiencia comercial,
          automatización y herramientas tecnológicas para transformar procesos
          desordenados en operaciones más eficientes, medibles y rentables.
        </p>
      </section>

      <section style={{
        padding:"80px 10%",
        borderBottom:"1px solid #1e293b"
      }}>
        <h3 style={{fontSize:"48px"}}>
          ¿Qué resultados busco generar?
        </h3>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
          gap:"20px",
          marginTop:"40px"
        }}>

          {[
            {
              title:"Mejor relación con clientes",
              text:"Comunicación más clara, seguimiento automatizado, fidelización y mejor experiencia."
            },
            {
              title:"Menos carga operativa",
              text:"Reducción de tareas repetitivas y procesos manuales."
            },
            {
              title:"Más información útil",
              text:"Reportes y métricas para tomar decisiones objetivas."
            },
            {
              title:"Más rentabilidad",
              text:"Operaciones más eficientes, mejor control y mayor capacidad de crecimiento."
            }
          ].map((item) => (
            <div key={item.title} style={{
              background:"#0f172a",
              border:"1px solid #1e293b",
              borderRadius:"24px",
              padding:"30px"
            }}>
              <h4 style={{fontSize:"24px"}}>
                {item.title}
              </h4>

              <p style={{
                color:"#94a3b8",
                lineHeight:"1.8"
              }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        padding:"80px 10%",
        borderBottom:"1px solid #1e293b"
      }}>
        <h3 style={{fontSize:"48px"}}>
          Casos de transformación operativa
        </h3>

        <div style={{
          marginTop:"40px",
          display:"grid",
          gap:"30px"
        }}>
          <div style={{
            background:"#0f172a",
            border:"1px solid #1e293b",
            borderRadius:"24px",
            padding:"40px"
          }}>
            <h4 style={{fontSize:"30px"}}>
              C&M Turismo
            </h4>

            <p style={{
              color:"#94a3b8",
              lineHeight:"1.8",
              marginTop:"20px"
            }}>
              Optimización de procesos comerciales y operativos para gestión
              masiva de paquetes turísticos, cobranzas, pagos y experiencia
              comercial del cliente.
            </p>
          </div>

          <div style={{
            background:"#0f172a",
            border:"1px solid #1e293b",
            borderRadius:"24px",
            padding:"40px"
          }}>
            <h4 style={{fontSize:"30px"}}>
              Aqua Natura
            </h4>

            <p style={{
              color:"#94a3b8",
              lineHeight:"1.8",
              marginTop:"20px"
            }}>
              Rediseño operativo de distribución y reparto mediante
              automatización, control de stock, fidelización, WhatsApp y
              herramientas de información comercial.
            </p>
          </div>
        </div>
      </section>

      <section style={{
        padding:"80px 10%"
      }}>
        <h3 style={{fontSize:"48px"}}>
          Contacto
        </h3>

        <p style={{
          marginTop:"20px",
          fontSize:"22px",
          color:"#cbd5e1"
        }}>
          WhatsApp: 3541 22 5990
        </p>

        <a
          href="https://www.linkedin.com/in/walter-chao88/"
          style={{
            color:"#67e8f9",
            fontSize:"20px"
          }}
        >
          LinkedIn
        </a>
      </section>

    </main>
  );
}

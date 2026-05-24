
import React from "react";
import walterPhoto from "./assets/walter-profesional.png";

import cmCarga from "./assets/cm-turismo-carga-masiva.png";
import cmSelector from "./assets/cm-turismo-selector-fecha.png";
import cmOpciones from "./assets/cm-turismo-opciones-paquete.png";
import cmVariacion from "./assets/cm-turismo-variacion.png";
import cmBalance from "./assets/cm-turismo-balance.png";

import aquaModulos1 from "./assets/aqua-modulos-1.png";
import aquaModulos2 from "./assets/aqua-modulos-2.png";
import aquaReportes from "./assets/aqua-reportes.png";
import aquaStock from "./assets/aqua-stock.png";
import aquaInbox from "./assets/aqua-inbox.png";
import aquaAutomatizaciones from "./assets/aqua-automatizaciones.png";
import aquaPOS from "./assets/aqua-pos-front.png";

const WHATSAPP_URL = "https://wa.me/5493541225990";
const LINKEDIN_URL = "https://www.linkedin.com/in/walter-chao88/";

const styles = {
  page: {
    background: "#020617",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "Inter, Arial, sans-serif",
  },
  section: {
    padding: "86px 8%",
    borderBottom: "1px solid rgba(148,163,184,.16)",
  },
  eyebrow: {
    color: "#67e8f9",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    fontSize: "13px",
    fontWeight: 700,
  },
  h1: {
    fontSize: "clamp(48px, 8vw, 92px)",
    lineHeight: 0.95,
    margin: "22px 0",
    letterSpacing: "-4px",
  },
  h2: {
    fontSize: "clamp(30px, 5vw, 56px)",
    lineHeight: 1.05,
    margin: 0,
    letterSpacing: "-2px",
  },
  lead: {
    maxWidth: "920px",
    fontSize: "20px",
    lineHeight: 1.75,
    color: "#cbd5e1",
  },
  muted: {
    color: "#94a3b8",
    lineHeight: 1.75,
  },
  card: {
    background: "rgba(15, 23, 42, .82)",
    border: "1px solid rgba(148,163,184,.18)",
    borderRadius: "28px",
    padding: "28px",
    boxShadow: "0 24px 80px rgba(0,0,0,.24)",
  },
  image: {
    width: "100%",
    borderRadius: "20px",
    border: "1px solid rgba(148,163,184,.20)",
    background: "#0f172a",
    display: "block",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 24px",
    borderRadius: "18px",
    background: "#67e8f9",
    color: "#020617",
    fontWeight: 800,
    textDecoration: "none",
    marginRight: "12px",
    marginTop: "18px",
  },
  buttonGhost: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 24px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,.18)",
    color: "#fff",
    textDecoration: "none",
    marginTop: "18px",
  },
};

function ValueCard({ title, text }) {
  return (
    <div style={styles.card}>
      <h3 style={{ fontSize: 24, marginTop: 0 }}>{title}</h3>
      <p style={styles.muted}>{text}</p>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "8px 12px",
      borderRadius: "999px",
      border: "1px solid rgba(103,232,249,.24)",
      background: "rgba(103,232,249,.08)",
      color: "#cffafe",
      fontSize: 13,
      marginRight: 8,
      marginBottom: 8,
    }}>
      {children}
    </span>
  );
}

function ImageGrid({ images }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 18,
      marginTop: 28,
    }}>
      {images.map((item) => (
        <figure key={item.label} style={{ margin: 0 }}>
          <img src={item.src} alt={item.label} style={styles.image} />
          <figcaption style={{ color: "#94a3b8", fontSize: 13, marginTop: 10 }}>
            {item.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <main style={styles.page}>
      <section style={{
        ...styles.section,
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.25fr) minmax(280px, .75fr)",
        gap: 50,
        alignItems: "center",
      }}>
        <div>
          <p style={styles.eyebrow}>Optimización operativa · Automatización · Rentabilidad</p>
          <h1 style={styles.h1}>Walter Chao</h1>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 46px)",
            lineHeight: 1.18,
            color: "#e2e8f0",
            margin: 0,
            letterSpacing: "-1.5px",
          }}>
            Ayudo a PyMEs a vender más y operar mejor mediante procesos, automatización y tecnología aplicada.
          </h2>
          <p style={{...styles.lead, marginTop: 28}}>
            Mi enfoque combina visión comercial, operación real, experiencia de cliente y herramientas informáticas para transformar procesos desordenados en operaciones más eficientes, medibles y rentables.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={styles.button}>Contactar por WhatsApp</a>
          <a href="#casos" style={styles.buttonGhost}>Ver casos reales</a>
        </div>

        <div style={{...styles.card, padding: 14}}>
          <img src={walterPhoto} alt="Walter Chao" style={{
            ...styles.image,
            borderRadius: 24,
            aspectRatio: "1/1",
            objectFit: "cover",
          }} />
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.eyebrow}>Propuesta de valor</p>
        <h2 style={styles.h2}>No se trata sólo de implementar herramientas. Se trata de mejorar el negocio.</h2>
        <p style={{...styles.lead, marginTop: 24}}>
          Las soluciones que diseño usan sistemas, procedimientos y automatización como medios para lograr impactos concretos: mejor relación con clientes, menos carga operativa, decisiones más inteligentes y mayor rentabilidad.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          marginTop: 38,
        }}>
          <ValueCard title="Mejor relación con clientes" text="Comunicación más clara, seguimiento automatizado, recordatorios, fidelización y una experiencia más ordenada." />
          <ValueCard title="Menos carga operativa" text="Reducción de tareas repetitivas, errores manuales y procesos que consumen tiempo sin agregar valor." />
          <ValueCard title="Valor agregado comercial" text="Promociones, programas de puntos, beneficios, comunicación segmentada y herramientas para retener clientes." />
          <ValueCard title="Decisiones con datos" text="Reportes, tableros e información objetiva para decidir con menos intuición y más evidencia." />
          <ValueCard title="Más ventas" text="Mejor seguimiento, menos oportunidades perdidas, procesos comerciales más claros y clientes mejor atendidos." />
          <ValueCard title="Más rentabilidad" text="Operaciones más eficientes, mejor control, reducción de fricción y foco en actividades que generan resultado." />
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.eyebrow}>Cómo trabajo</p>
        <h2 style={styles.h2}>Diagnóstico, rediseño y herramientas al servicio del resultado.</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
          marginTop: 38,
        }}>
          <ValueCard title="1. Entender la operación" text="Relevo cómo funciona el negocio, dónde se pierde tiempo, qué tareas se repiten y qué información falta." />
          <ValueCard title="2. Rediseñar procesos" text="Ordeno flujos comerciales y operativos para que sean más simples, medibles y escalables." />
          <ValueCard title="3. Aplicar tecnología" text="Uso WordPress, WooCommerce, WhatsApp, QR, reportes, automatizaciones y herramientas digitales como soporte del proceso." />
          <ValueCard title="4. Medir y mejorar" text="La solución debe dejar información clara para tomar decisiones y seguir optimizando el negocio." />
        </div>
      </section>

      <section id="casos" style={styles.section}>
        <p style={styles.eyebrow}>Casos reales</p>
        <h2 style={styles.h2}>Transformaciones operativas y comerciales</h2>

        <article style={{...styles.card, marginTop: 40}}>
          <h3 style={{fontSize: 34, marginTop: 0}}>C&M Turismo</h3>
          <p style={styles.lead}>
            Optimización de procesos para una operación turística con alta complejidad: múltiples destinos, fechas, alojamientos, operadores mayoristas, cobranzas, pagos y comunicación comercial.
          </p>
          <div style={{marginTop: 12}}>
            <Tag>Carga masiva</Tag>
            <Tag>WooCommerce aplicado</Tag>
            <Tag>Procesos comerciales</Tag>
            <Tag>Cobranzas y pagos</Tag>
            <Tag>UX operativa</Tag>
          </div>
          <ImageGrid images={[
            {src: cmCarga, label: "Panel de carga masiva de variaciones"},
            {src: cmSelector, label: "Selector de fecha de salida en frontend"},
            {src: cmOpciones, label: "Opciones de paquete para una fecha"},
            {src: cmVariacion, label: "Información de variación seleccionada"},
            {src: cmBalance, label: "Balance de cobros y pagos"},
          ]} />
        </article>

        <article style={{...styles.card, marginTop: 36}}>
          <h3 style={{fontSize: 34, marginTop: 0}}>Aqua Natura</h3>
          <p style={styles.lead}>
            Rediseño operativo de una distribuidora de agua para centralizar ventas, reparto, stock, clientes, fidelización, comunicación por WhatsApp, trazabilidad y reportes de gestión.
          </p>
          <div style={{marginTop: 12}}>
            <Tag>Operación comercial</Tag>
            <Tag>Reparto</Tag>
            <Tag>WhatsApp</Tag>
            <Tag>Fidelización</Tag>
            <Tag>Stock y trazabilidad</Tag>
            <Tag>Reportes</Tag>
          </div>
          <ImageGrid images={[
            {src: aquaPOS, label: "Front del POS con clientes, beneficios y pagos"},
            {src: aquaModulos1, label: "Panel modular de operación"},
            {src: aquaModulos2, label: "Módulos de gestión interna"},
            {src: aquaReportes, label: "Resumen de ventas e informes"},
            {src: aquaStock, label: "Stock de bidones en clientes, camioneta y planta"},
            {src: aquaInbox, label: "Inbox WhatsApp"},
            {src: aquaAutomatizaciones, label: "Automatizaciones de mensajes por WhatsApp"},
          ]} />
        </article>
      </section>

      <section style={styles.section}>
        <p style={styles.eyebrow}>Herramientas</p>
        <h2 style={styles.h2}>Tecnología aplicada al negocio, no tecnología por sí misma.</h2>
        <p style={{...styles.lead, marginTop: 24}}>
          WordPress · WooCommerce · PHP · JavaScript · WhatsApp API · Meta · Google Maps · QR · Automatización · Reportes · UX/UI · Meta Ads · Google Ads
        </p>
      </section>

      <section style={{...styles.section, borderBottom: 0, textAlign: "center"}}>
        <p style={styles.eyebrow}>Contacto</p>
        <h2 style={styles.h2}>¿Tu negocio necesita vender más, operar mejor y decidir con más información?</h2>
        <p style={{...styles.lead, margin: "24px auto 0"}}>
          Podemos revisar tu operación y detectar oportunidades concretas de mejora.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={styles.button}>Escribirme por WhatsApp</a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" style={styles.buttonGhost}>Ver LinkedIn</a>
      </section>

      <footer style={{
        padding: "28px 8%",
        borderTop: "1px solid rgba(148,163,184,.16)",
        color: "#64748b",
        textAlign: "center",
      }}>
        © {new Date().getFullYear()} Walter Chao · Optimización operativa y comercial para PyMEs.
      </footer>
    </main>
  );
}

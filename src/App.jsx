
import React from "react";
import "./styles.css";

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

function ValueCard({ title, text }) {
  return (
    <div className="card value-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((item) => (
        <figure key={item.label} className="image-figure">
          <img src={item.src} alt={item.label} />
          <figcaption>{item.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <main className="page">
      <section className="section hero">
        <div className="hero-copy">
          <p className="eyebrow">Optimización operativa · Automatización · Rentabilidad</p>
          <h1>Walter Chao</h1>
          <h2>
            Ayudo a PyMEs a vender más y operar mejor mediante procesos,
            automatización y tecnología aplicada.
          </h2>
          <p className="lead">
            Mi enfoque combina visión comercial, operación real, experiencia de
            cliente y herramientas informáticas para transformar procesos
            desordenados en operaciones más eficientes, medibles y rentables.
          </p>

          <div className="button-row">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button primary">
              Contactar por WhatsApp
            </a>
            <a href="#casos" className="button secondary">
              Ver casos reales
            </a>
          </div>
        </div>

        <div className="photo-card">
          <img src={walterPhoto} alt="Walter Chao" />
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Propuesta de valor</p>
        <h2 className="section-title">
          No se trata sólo de implementar herramientas. Se trata de mejorar el negocio.
        </h2>
        <p className="lead section-lead">
          Las soluciones que diseño usan sistemas, procedimientos y automatización
          como medios para lograr impactos concretos: mejor relación con clientes,
          menos carga operativa, decisiones más inteligentes y mayor rentabilidad.
        </p>

        <div className="value-grid">
          <ValueCard title="Mejor relación con clientes" text="Comunicación más clara, seguimiento automatizado, recordatorios, fidelización y una experiencia más ordenada." />
          <ValueCard title="Menos carga operativa" text="Reducción de tareas repetitivas, errores manuales y procesos que consumen tiempo sin agregar valor." />
          <ValueCard title="Valor agregado comercial" text="Promociones, programas de puntos, beneficios, comunicación segmentada y herramientas para retener clientes." />
          <ValueCard title="Decisiones con datos" text="Reportes, tableros e información objetiva para decidir con menos intuición y más evidencia." />
          <ValueCard title="Más ventas" text="Mejor seguimiento, menos oportunidades perdidas, procesos comerciales más claros y clientes mejor atendidos." />
          <ValueCard title="Más rentabilidad" text="Operaciones más eficientes, mejor control, reducción de fricción y foco en actividades que generan resultado." />
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Cómo trabajo</p>
        <h2 className="section-title">
          Diagnóstico, rediseño y herramientas al servicio del resultado.
        </h2>

        <div className="value-grid process-grid">
          <ValueCard title="1. Entender la operación" text="Relevo cómo funciona el negocio, dónde se pierde tiempo, qué tareas se repiten y qué información falta." />
          <ValueCard title="2. Rediseñar procesos" text="Ordeno flujos comerciales y operativos para que sean más simples, medibles y escalables." />
          <ValueCard title="3. Aplicar tecnología" text="Uso WordPress, WooCommerce, WhatsApp, QR, reportes, automatizaciones y herramientas digitales como soporte del proceso." />
          <ValueCard title="4. Medir y mejorar" text="La solución debe dejar información clara para tomar decisiones y seguir optimizando el negocio." />
        </div>
      </section>

      <section id="casos" className="section">
        <p className="eyebrow">Casos reales</p>
        <h2 className="section-title">Transformaciones operativas y comerciales</h2>

        <article className="card case-card">
          <h3>C&M Turismo</h3>
          <p className="lead case-lead">
            Optimización de procesos para una operación turística con alta
            complejidad: múltiples destinos, fechas, alojamientos, operadores
            mayoristas, cobranzas, pagos y comunicación comercial.
          </p>
          <div className="tags">
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

        <article className="card case-card">
          <h3>Aqua Natura</h3>
          <p className="lead case-lead">
            Rediseño operativo de una distribuidora de agua para centralizar
            ventas, reparto, stock, clientes, fidelización, comunicación por
            WhatsApp, trazabilidad y reportes de gestión.
          </p>
          <div className="tags">
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

      <section className="section">
        <p className="eyebrow">Herramientas</p>
        <h2 className="section-title">
          Tecnología aplicada al negocio, no tecnología por sí misma.
        </h2>
        <p className="lead section-lead">
          WordPress · WooCommerce · PHP · JavaScript · WhatsApp API · Meta ·
          Google Maps · QR · Automatización · Reportes · UX/UI · Meta Ads · Google Ads
        </p>
      </section>

      <section className="section contact-section">
        <p className="eyebrow">Contacto</p>
        <h2 className="section-title">
          ¿Tu negocio necesita vender más, operar mejor y decidir con más información?
        </h2>
        <p className="lead section-lead">
          Podemos revisar tu operación y detectar oportunidades concretas de mejora.
        </p>

        <div className="button-row centered">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button primary">
            Escribirme por WhatsApp
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="button secondary">
            Ver LinkedIn
          </a>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Walter Chao · Optimización operativa y comercial para PyMEs.
      </footer>
    </main>
  );
}

import React from 'react'
import maslow from '../../assets/maslow.jpeg';
import imagen from '../../assets/Pirámide_de_Maslow.svg'

const Abraham = () => {
  return (
    <div className='persona'>
      <div className="titulo">
        <h1>Abraham Maslow</h1>
      </div>
      <div className="imagen"><iframe width="455" height="auto" src="https://www.youtube.com/embed/mpEwhjGAbH4" title="Abraham Maslow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      
      <div className="biografia">
      <div className="titulo">
        <h1>Biografia</h1>
      </div>
        <p>
        <span>1908:</span> Abraham Maslow nace el 1 de abril en Brooklyn, Nueva York. <br/>
    <span>1930s - 1950s:</span> Realiza investigaciones y trabaja en docencia en psicología, inicialmente influenciado por el psicoanálisis y el conductismo.<br/>
    <span>1943:</span> Publica "Una teoría de la motivación humana", donde introduce su influyente Jerarquía de Necesidades.<br/>
    <span>1954:</span> Publica "Motivation and Personality", consolidando su teoría sobre la motivación y explorando la autorrealización.<br/>
    <span>1960s:</span> Profundiza en la Psicología Humanista, promoviendo la importancia del autoconocimiento y el desarrollo personal.<br/>
    <span>1967:</span> Publica "Religions, Values, and Peak Experiences", explorando la espiritualidad y el potencial humano más allá de la autorrealización.<br/>
    <span>1970:</span> Fallece el 8 de junio en Menlo Park, California, dejando un legado duradero en la psicología y la teoría motivacional.
        </p>
   


      </div>
      <div className="concepto">

      <h1>Jerarquía de Necesidades de Abraham Maslow</h1>

    <h2>La Pirámide de Maslow</h2>
    <p>La <span>pirámide de Maslow</span>, también conocida como la <span>Jerarquía de las Necesidades Humanas</span>, es una teoría psicológica desarrollada por Abraham Maslow en su obra <i>Una teoría sobre la motivación humana</i> (1943) y ampliada posteriormente. Esta teoría no solo tuvo un impacto en el ámbito de la psicología, sino que también influyó en el campo empresarial, de marketing y publicidad.</p>

    <h2>La Pirámide de Necesidades</h2>
    <p>La jerarquía de necesidades se presenta en cinco niveles, agrupando los primeros cuatro como "<span>necesidades de déficit</span>" y el nivel superior como "<span>autorrealización</span>" o "<span>necesidad de ser</span>".</p>

    <ol>
        <li>
            <h3>Necesidades Básicas</h3>
            <p>Son las necesidades fisiológicas esenciales para mantener el equilibrio interno y la supervivencia, como respirar, hidratarse, alimentarse, dormir, eliminar desechos y satisfacción sexual.</p>
        </li>
        <li>
            <h3>Necesidades de Seguridad y Protección</h3>
            <p>Surgen cuando se satisfacen las necesidades fisiológicas. Incluyen sentirse seguro y protegido tanto física como materialmente, como la seguridad física, la seguridad de recursos y la vivienda.</p>
        </li>
        <li>
            <h3>Necesidades Sociales (Afiliación)</h3>
            <p>Relacionadas con la naturaleza social del individuo, como la amistad, las relaciones de pareja, colegas o familia, y la aceptación social.</p>
        </li>
        <li>
            <h3>Necesidades de Estima (Reconocimiento)</h3>
            <p>Maslow distingue entre dos tipos de necesidades de estima. La estima alta se refiere al respeto por uno mismo, incluyendo la confianza, la competencia, el logro y la independencia. La estima baja implica el respeto y reconocimiento de los demás.</p>
        </li>
        <li>
            <h3>Autorrealización</h3>
            <p>Es el nivel más elevado y se alcanza cuando los niveles anteriores han sido satisfechos o al menos en cierta medida. Representa la plena realización del potencial individual y la búsqueda de un sentido de vida. Se considera la necesidad psicológica más alta.</p>
        </li>
    </ol>

    <h2>Características Generales de la Teoría de Maslow</h2>
    <ul>
        <li>Solo las necesidades insatisfechas influyen en el comportamiento.</li>
        <li>Las necesidades fisiológicas son inherentes al individuo, mientras que las otras emergen con el tiempo.</li>
        <li>A medida que se controlan las necesidades básicas, surgen gradualmente necesidades superiores.</li>
        <li>Las necesidades más elevadas no surgen en proporción directa a la satisfacción de las necesidades inferiores.</li>
        <li>Las necesidades básicas se satisfacen en ciclos más cortos, mientras que las superiores requieren ciclos más largos.</li>
    </ul>
    <img src={imagen}/>
      </div>
      <div className="video"></div>

    </div>
  )
}

export default Abraham
import React from 'react'
import elton from '../../assets/elton.jpeg';

const Elton = () => {
  return (
    <div className='persona'>
      <div className="titulo">
        <h1>Elton Mayo</h1>
      </div>
      <div className="imagen"><iframe width="320" height="auto" src="https://www.youtube.com/embed/8XboFTID1Zg" title="Elton Mayo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      
      <div className="biografia">
      <div className="titulo">
        <h1>Biografia</h1>
      </div>
        <p>
        <span>1880:</span> Elton Mayo nace el 26 de diciembre en Adelaida, Australia. <br/>
    <span>1920s - 1930s:</span> Realiza investigaciones en el ámbito de la psicología y la sociología industrial en la Universidad de Harvard.<br/>
    <span>1927:</span> Comienza los famosos "experimentos de Hawthorne" en la Western Electric Hawthorne Works en Chicago.<br/>
    <span>1933:</span> Publica conjuntamente con sus colegas el informe preliminar de los experimentos de Hawthorne, que destaca la influencia de los factores sociales en la productividad laboral.<br/>
    <span>1939:</span> Se publica su obra "The Social Problems of an Industrial Civilization", donde profundiza en las implicaciones sociales y humanas del trabajo industrial.<br/>
    <span>1940s:</span> Continúa enseñando e investigando en Harvard, contribuyendo al desarrollo de la teoría de las relaciones humanas en la administración.<br/>
    <span>1949:</span> Fallece el 7 de septiembre en Polesden Lacey, Inglaterra.
        </p>
   


      </div>
      <div className="concepto">
      <h1>Aportes de Elton Mayo</h1>

    <h2>Estudios de Hawthorne</h2>
    <p>Elton Mayo es conocido principalmente por sus <span>estudios de Hawthorne</span>, que exploraron la lógica del sentimiento de los trabajadores y la lógica del coste y la eficiencia de los directivos, y cómo estas perspectivas podrían llevar a conflictos dentro de las organizaciones.</p>

    <p>Mayo afirmó que el estudio aplicado de las relaciones de trabajo requería la integración de varias perspectivas.</p>

    <p>Los hallazgos de Mayo y sus colaboradores, basados en parte en las ideas concebidas por Vilfredo Pareto, tuvieron un efecto crucial en el pensamiento administrativo. Se descubrió que el aumento de la productividad se debía a factores sociales como la moral de los empleados, las interrelaciones satisfactorias entre los miembros de un grupo de trabajo ("sentido de pertenencia") y la eficacia de la administración.</p>

    <p>Mayo introdujo la idea de que el individuo no es una máquina y que brindándole incentivos, rendirá en su trabajo.</p>

    <h2>Experimento de Hawthorne y Conclusiones</h2>
    <h3>Primera fase</h3>
    <p>A partir de 1925, se estudió el efecto de la iluminación sobre el rendimiento de los obreros en la Western Electric Company. Mayo encontró que las condiciones psicológicas afectan la productividad. Llegó a la conclusión de que cambiar el ambiente social podría mejorar las relaciones humanas, pero este es solo uno de los factores que influyen en la productividad.</p>

    <h3>Segunda fase</h3>
    <p>En una segunda fase del experimento, se registró el mantenimiento de las condiciones de trabajo y horarios normales. Los obreros percibieron que sus mejores esfuerzos individuales se veían reflejados en sus salarios. Introdujeron minutos de descanso y una semana de cinco días con el sábado libre para aumentar la producción.</p>

    <p>Mayo dirigió una investigación en una fábrica textil en Filadelfia, donde introdujo periodos de descanso y permitió que los obreros decidieran cuándo parar las máquinas. Esto resultó en solidaridad en el grupo, aumento de producción y disminución de la rotación.</p>

    <p>Los investigadores verificaron que los resultados del experimento se vieron afectados por variables psicológicas. Intentaron eliminar o neutralizar el factor psicológico, lo que llevó a prolongar el experimento. Se llegó a la conclusión de que la relación entre productividad e iluminación estaba influenciada por factores psicológicos.</p>

    <p>Los experimentos de Mayo en Hawthorne permitieron delinear los principios básicos de la escuela de las relaciones humanas.</p>

    <h2>Conclusiones del experimento de Hawthorne</h2>
    <ul>
        <li>El nivel de producción es afectado por la capacidad fisiológica del trabajador y factores sociales y expectativas.</li>
        <li>El comportamiento del individuo está influenciado por el grupo.</li>
        <li>Los obreros que se alejan de las normas sociales pierden el afecto y el respeto de los compañeros.</li>
        <li>Se concentró en los aspectos informales de la organización y la importancia de la organización informal.</li>
        <li>En la organización, es vital tener en cuenta las decisiones de los empleados para establecer relaciones humanas efectivas.</li>
        <li>Mayo concluyó que mayor interacción conduce a mayor productividad.</li>
        <li>Cualquier cambio produce una reacción en el personal.</li>
        <li>El bienestar del trabajador está relacionado con la productividad.</li>
    </ul>

<img src={''}/>

      </div>
      <div className="video"></div>

    </div>
  )
}

export default Elton
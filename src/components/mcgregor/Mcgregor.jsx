import React from 'react'
import './mcgregor.css'
import mcgregor from '../../assets/mcgregor.jpeg';
import image from '../../assets/McgregorXY-languages.gif'

const Mcgregor = () => {
  return (
  <div className='persona'>
    <div className="titulo">
      <h1>Douglas Mcgregor</h1>
    </div>
    <div className="imagen"><iframe width="320" height="auto" src="https://www.youtube.com/embed/TNscWKsviyw" title="Douglas Mc Gregor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    
    
    <div className="biografia">
    <div className="titulo">
      <h1>Biografia</h1>
    </div>
      <p>
        <span>1908:</span> Nace el 1 de abril en Brooklyn, Nueva York. <br/>
        <span>1930s - 1950s:</span> Trabaja en investigación y docencia en psicología, influenciado por el conductismo.<br/>
        1943: Publica "Una teoría de la motivación humana" donde introduce su famosa Jerarquía de Necesidades.<br/>
        <span>1954:</span> Publica "Motivation and Personality", estableciendo aún más su teoría de motivación.<br/>
        <span>1960s:</span> Se centra en la Psicología Humanista, promoviendo la autorrealización y el crecimiento personal.<br/>
        <span>1967:</span> Publica "Religions, Values, and Peak Experiences", explorando la espiritualidad y el potencial humano.<br/>
        <span>1970:</span> Fallece el 8 de junio en Menlo Park, California.
      </p>
    
    </div>
    <div className="concepto">


      <h1>Enfoques de Gestión: Teorías X y Y de Douglas McGregor</h1>

    <h2>Teoría X: Percepción Pesimista</h2>
    <p>La perspectiva de la <span>Teoría X</span> se asocia con supuestos arraigados en el modelo de administración científica propuesto por Frederick Taylor. En este enfoque, se presupone que los trabajadores tienen una actitud pesimista hacia el trabajo. Son considerados estáticos, rígidos y propensos a evitar el trabajo siempre que puedan. Según esta teoría, los directivos creen que, en promedio, los empleados carecen de ambición, buscan la seguridad y evitan responsabilidades.</p>

    <h2>Teoría Y: Percepción Optimista</h2>
    <p>En contraste, la <span>Teoría Y</span> adopta una perspectiva mucho más optimista hacia los trabajadores, considerándolos como el activo más valioso de la empresa. Aquí, los empleados son vistos como individuos dinámicos, flexibles y optimistas. Se asume que los trabajadores disfrutan tanto del trabajo mental como físico, lo que los lleva a abordarlo como un desafío placentero o incluso como un juego. Además, esta teoría sugiere que los empleados poseen la habilidad intrínseca para resolver problemas de manera creativa.</p>

    <h3>En la visión de la Teoría Y:</h3>
    <ul>
        <li>Se ve el esfuerzo en el trabajo como algo natural, al igual que el descanso y el juego.</li>
        <li>Las personas son capaces de autodirección y autocontrol cuando están comprometidas con objetivos.</li>
        <li>El grado de compromiso está ligado a las recompensas asociadas con el éxito.</li>
        <li>Las personas están dispuestas a asumir responsabilidades y tomar decisiones.</li>
        <li>Existe un alto potencial para la imaginación y la creatividad en la resolución de problemas.</li>
        <li>Las capacidades humanas no se utilizan completamente en el contexto industrial actual.</li>
    </ul>

    <p>La <span>Teoría Y</span> implica que, para lograr los objetivos organizacionales, los líderes deben:</p>
    <ul>
        <li>Considerar a los individuos como maduros y responsables.</li>
        <li>Fomentar un estilo de liderazgo participativo y democrático, basado en la autodirección y autocontrol, y con menos control externo.</li>
    </ul>

    <p>Esta teoría sugiere que, al proporcionar condiciones adecuadas para el trabajo, la mayoría de las personas se desempeñarán bien y estarán motivadas. También resalta que la satisfacción intrínseca de realizar un trabajo de calidad, ya sea mental o físico, actúa como un motor de motivación.</p>

    <p>Douglas McGregor introdujo estas teorías en la década de 1960, destacando cómo las percepciones de los gerentes sobre los empleados pueden influir en sus estilos de liderazgo y en la cultura organizacional. La distinción entre Teoría X y Teoría Y ha sido fundamental en el campo de la administración, ayudando a moldear la forma en que los líderes interactúan y motivan a sus equipos.</p>

<img src={image}/>
    </div>
    <div className="video">

    </div>

  </div>
  )
}

export default Mcgregor
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './author.css';
import maslow from '../../assets/maslow.jpeg';
import elton from '../../assets/elton.jpeg';
import mcgregor from '../../assets/mcgregor.jpeg';

const Author = () => {
  const names = [
    {
      nombre: 'Abraham Maslow',
      descripcion: "fue un destacado psicólogo conocido por su Teoría de la Motivación Humana y la Jerarquía de Necesidades...",
      imagen: maslow,
      link: '/abraham'
    },
    {
      nombre: 'Elton Mayo',
      descripcion: "fue un influyente sociólogo y psicólogo conocido por sus estudios sobre la productividad en el lugar de trabajo...",
      imagen: elton,
      link: '/elton'
    },
    {
      nombre: 'Douglas McGregor',
      descripcion: "fue un prominente psicólogo y profesor de administración que presentó la Teoría X e Y...",
      imagen: mcgregor,
      link: '/mcgregor'
    }
  ];

  return (
    <div className='authors'>
      <h1>
        Aportes a la Administración: Enfoque Humano Relacionista
      </h1>
      <p>
      La página web "Explorando el Enfoque Humano Relacionista en la Administración" es una plataforma que presenta una visión profunda y educativa sobre los aportes significativos al campo de la administración a través del enfoque humano relacionista. En esta página, exploraremos la valiosa contribución de tres influyentes teóricos: Abraham Maslow, Elton Mayo y Douglas McGregor.
<br/> <br/>
A través de información detallada y enriquecedores perfiles, aprenderás sobre las teorías que cada uno de estos autores presentó y cómo han influido en la administración moderna. Desde la jerarquía de necesidades de Maslow, hasta los estudios de relaciones humanas de Mayo y las teorías X e Y de McGregor, esta página te brindará una comprensión sólida de cómo estos enfoques han transformado la manera en que se gestiona y lidera en las organizaciones.
<br/> <br/>
Sumérgete en el mundo de la psicología aplicada a la administración y descubre cómo el enfoque humano relacionista ha impactado la forma en que se gestionan los equipos, se fomenta la motivación y se crea un ambiente laboral más saludable y productivo.
      </p>
      
      <div className="container1">
        {names.map((name, index) => (
          <Card key={index} style={{ width: '18rem', padding: '1.2rem', margin:'1.5rem', border:'none', color:'white', background:'black' }}>
            <Card.Img variant="top" src={name.imagen} alt={name.nombre} />
            <Card.Body>
              <Card.Title>{name.nombre}</Card.Title>
              <Card.Text>
                {name.descripcion}
              </Card.Text>
              <Button href={name.link} style={{backgroundColor: 'rgba(1, 88, 198, 1)', border: 'none'}}>Ver más</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Author;

import { useState, useEffect } from 'react';
export default () => {
  const [cast, setCast] = useState([]);
  async function getCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }
  useEffect(() => {
    getCast();
  }, []);
  return (
    <div
      style={{
        dislay: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
        gap: `1rem`,
        marginBottom: '1rem',
      }}
    >
      {cast.map((member) => (
        <a key={member.id} data-tooltip={member.name} >
          <img
            src={`images/${member.slug}_tn.svg`}
            style={{ height: 80, width: 80 }}
            alt={member.name}
          />
          
        </a>
      ))}
    </div>
  );
};

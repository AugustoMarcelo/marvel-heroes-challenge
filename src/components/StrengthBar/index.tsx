import React, { useState, useEffect } from 'react';

import { Container, Bar } from './styles';

interface StrengthProps {
  strength: number;
  strengthBase: number;
}

const StrengthBar: React.FC<StrengthProps> = ({ strength, strengthBase }) => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    for (let count = 1; count <= strengthBase; count += 1) {
      setBars(oldState => [...oldState, count]);
    }
  }, [strengthBase]);

  return (
    <Container>
      {bars.map(bar => (
        <Bar
          key={bar}
          color={bar <= Math.round((strength * strengthBase) / 100)}
          height={bar === Math.round((strength * strengthBase) / 100)}
        />
      ))}
    </Container>
  );
};

export default StrengthBar;

import React from 'react';
import { Heading, Box, Mark, useHighlight } from '@chakra-ui/react';

function SoftSkill({size}) {
  const chunks = useHighlight({
    text: "SOFT SKILLS",
    query: ["SOFT"]
  });

  return (
    <Heading lineHeight="tall" size={size}>
      {chunks.map(({ match, text }) => {
        if (!match) return text;
        return text === 'instantly' ? (
          <Box as='u' fontFamily='NewYork'>
            {text}
          </Box>
        ) : (
          <Mark bg='black' color="white"  fontFamily='NewYork' px='2' py='1'>
            {text}
          </Mark>
        );
      })}
    </Heading>
  );
}

export default SoftSkill;

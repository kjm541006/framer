import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
  margin-bottom: 100px;
`;

const Box = styled(motion.div)`
  height: 250px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVar = {
  hover: {
    scale: 1.2,
  },
};

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 50%;
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  const [toggle, setToggle] = useState(true);
  const switchCircle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Wrapper>
      <Grid>
        <Box
          style={{ originX: 1, originY: 1 }}
          whileHover="hover"
          variants={boxVar}
          custom="1"
          onClick={() => setId("1")}
          layoutId="1"
          key="1"
        />
        <Box
          style={{ originX: 0, originY: 1 }}
          whileHover="hover"
          variants={boxVar}
          custom="2"
          onClick={() => setId("2")}
          layoutId="2"
          key="2"
        >
          {toggle ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          style={{ originX: 1, originY: 0 }}
          whileHover="hover"
          variants={boxVar}
          custom="3"
          onClick={() => setId("3")}
          layoutId="3"
          key="3"
        >
          {!toggle ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          style={{ originX: 0, originY: 0 }}
          whileHover="hover"
          variants={boxVar}
          custom="4"
          onClick={() => setId("4")}
          layoutId="4"
          key="4"
        />
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box
              layoutId={id}
              style={{ width: "25vw", height: "250px" }}
              // transition={{ duration: 3 }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <button onClick={switchCircle}>이동!</button>
    </Wrapper>
  );
}

export default App;

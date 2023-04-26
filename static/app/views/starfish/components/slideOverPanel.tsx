import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import {motion} from 'framer-motion';

const PANEL_WIDTH = '50vw';

type SlideOverPanelProps = {
  children: React.ReactNode;
  collapsed: boolean;
};

export default function SlideOverPanel({collapsed, children}: SlideOverPanelProps) {
  return (
    <_SlideOverPanel
      collapsed={collapsed}
      initial={{opacity: 0, x: PANEL_WIDTH}}
      animate={!collapsed ? {opacity: 1, x: 0} : {opacity: 0, x: PANEL_WIDTH}}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 50,
      }}
    >
      {children}
    </_SlideOverPanel>
  );
}

const _SlideOverPanel = styled(motion.div, {
  shouldForwardProp: prop =>
    ['animate', 'transition'].includes(prop) ||
    (prop !== 'collapsed' && isPropValid(prop)),
})<{
  collapsed: boolean;
}>`
  width: ${PANEL_WIDTH};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${p => p.theme.background};
  color: ${p => p.theme.textColor};
  border-left: 1px solid ${p => p.theme.border};
  text-align: left;
  z-index: ${p => p.theme.zIndex.sidebar - 1};
  ${p =>
    p.collapsed
      ? 'overflow: hidden;'
      : `overflow-x: hidden;
  overflow-y: scroll;`}
`;

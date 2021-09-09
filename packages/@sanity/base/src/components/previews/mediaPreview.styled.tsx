import {Box, Flex, rem} from '@sanity/ui'
import styled from 'styled-components'

export const MediaWrapper = styled(Flex)`
  position: absolute !important;
  inset: 0;
  background-color: var(--card-hairline-hard-color);
  border-radius: ${({theme}) => rem(theme.sanity.radius[2])};

  img {
    display: block;
    width: 100%;
    height: auto;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--card-shadow-umbra-color);
    border-radius: ${({theme}) => rem(theme.sanity.radius[2])};
  }
`

export const Root = styled(Box)`
  position: relative;
  overflow: hidden;
  flex-grow: 1;
`

export const MediaString = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  max-width: 100%;
`

export const ProgressWrapper = styled(Flex)`
  position: absolute;
  inset: 0;
  display: flex;

  > * {
    position: relative;
    z-index: 2;
  }

  &:before {
    background-color: var(--card-bg-color);
    opacity: 0.7;
    content: '';
    position: absolute;
    inset: 0;
  }
`
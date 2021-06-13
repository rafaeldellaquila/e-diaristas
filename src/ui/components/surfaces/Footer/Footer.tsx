import React from 'react';
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from './Footer.style';
import { Box, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. In unde excepturi ab porro quod et obcaecati
            debitis. Earum optio atque, nisi voluptatem quibusdam
            pariatur laborum, aliquam dolor eligendi, deleniti
            temporibus.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a
                href={'/'}
                target={'_blank'}
                rel={'noopener norefefrrer'}
              >
                <img
                  src={'/img/logos/app-store.png'}
                  alt={'App Store'}
                />
              </a>
            </li>{' '}
            <li>
              <a
                href={'/'}
                target={'_blank'}
                rel={'noopener norefefrrer'}
              >
                <img
                  src={'/img/logos/google-play.png'}
                  alt={'Google Play'}
                />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;

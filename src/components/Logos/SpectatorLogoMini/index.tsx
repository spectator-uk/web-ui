import React, { forwardRef } from 'react'
import { theme } from '../../../global/theme'
import { LogoProps } from '../index'
import { Styled } from './styles'

export const SpectatorLogoMini: React.FC<LogoProps> = forwardRef(
  ({ color = 'primary', className }, ref) => {
    const fillColor = theme.color[color]

    return (
      <Styled.logo ref={ref as any} viewBox='0 0 15 24' className={className}>
        <path
          d='M6.34664927,24 C3.93744937,24 2.23338115,23.3243574 0.0886056307,22.2668298 L0.0886056307,14.9816402 L0.705595847,14.9816402 C1.0287812,16.3329253 1.32258607,17.5960832 1.70453239,19.0061199 C1.94298289,19.9753119 2.34007872,20.8984114 2.87975186,21.7380661 C3.37922012,22.4724602 4.49567862,23.3537332 6.61107364,23.3537332 C7.43372725,23.3537332 9.78416621,23.1774786 11.1944296,21.003672 C11.67358,20.2156591 11.9276149,19.3114403 11.9289417,18.3892289 C11.9368628,17.4255413 11.6270986,16.4860742 11.0475271,15.7160343 C10.8013326,15.3439558 10.5047002,15.0078264 10.1661125,14.7172583 C8.9321321,13.7772338 7.49248825,13.2778458 4.760103,12.2203183 C3.40860061,11.7209302 2.96789332,11.2802938 2.3509031,10.8690331 C1.52824947,10.369645 0.000464171053,8.95960831 0.000464171053,6.34516524 C-0.0135901484,5.2068542 0.291765797,4.08739566 0.881878769,3.11383111 C1.99833726,1.20440635 4.78948348,0 7.46310775,0 C9.69602472,0 10.9300052,0.235006138 12.9866392,0.734394127 L12.9866392,8.04895963 L12.369649,8.04895963 C11.8701807,5.75764995 11.3707125,2.96695228 10.3717759,1.90942471 C9.81354671,1.35128518 8.99089304,0.675642592 7.13992238,0.675642592 C5.34771272,0.675642592 3.79054694,1.17503058 2.7916104,2.61444307 C2.28506436,3.29409767 2.00730868,4.11694524 1.99833726,4.96450429 C2.00560272,5.64014348 2.19873326,6.300747 2.5565665,6.87392899 C3.4379811,8.25458995 4.90700543,8.66585069 6.40541026,9.34149328 C6.9636395,9.57649936 7.58062969,9.78212974 8.08009799,10.0171359 C9.63726377,10.6340269 11.0769076,11.1334149 12.42841,12.3084456 C13.1629222,12.9253366 14.3381416,14.3059976 14.3381416,16.8910649 C14.3249064,18.0219356 14.032209,19.1319887 13.4861075,20.122399 C12.0464637,22.7955937 9.31407841,24 6.34664927,24 Z'
          fill={fillColor}
        />
      </Styled.logo>
    )
  }
)
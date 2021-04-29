import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Curso Superior de Tecnologia Análise e Desenvolvimento de Sistemas <span className="text-color-primary">(TADS)</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Tem como objetivo a formação de profissionais capazes de compreender o processo de construção e reconstrução do conhecimento no domínio da análise e desenvolvimento de sistemas e, dessa forma, realizar atividades de concepção, especificação, projeto, implementação,
              avaliação, suporte e manutenção de sistemas computacionais, orientando sua ação na sociedade em geral e no mundo do trabalho em particular para a busca de soluções para o setor produtivo (notadamente o setor primário da economia) e para a melhoria da qualidade de vida das populações.
              Os profissionais formados atuarão na área de análise e desenvolvimento de sistemas,podendo exercer atividades no campo da análise de sistemas, engenharia de software, gerência de projetos e administração de bancos de dados.
                </p>
            </div>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Além da formação geral em Tecnologia em Análise e Desenvolvimento de Sistemas, o curso tem objetivo de promover a integração entre as ciências agrárias e a denominada Tecnologia da Informação (TI) com suas diversas subáreas,obtendo-se assim uma gama de benefícios
              e ampliação do espectro de formação profissional em nível superior, considerando que um curso desta natureza permitirá ao egresso propor soluções tecnológicas em software e/ou hardware para as ciências agrárias ou, usando uma nomenclatura mais específica e mercadológica,
              para a cadeia do agronegócio e da agricultura familiar, sendo, nesse sentido estratégico para o desenvolvimento regional e nacional. Tais objetivos baseiam-se na formação de Tecnólogos com capacidade técnico-científica e visão integral, ética e humanística, comprometidos
              com o bem estar da sociedade envolvida e com o desenvolvimento sustentável, exercendo todas as competências relacionadas à profissão.
                </p>
            </div>
          </div> 
          </div>           
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
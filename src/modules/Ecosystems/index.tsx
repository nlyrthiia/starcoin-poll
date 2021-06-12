import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import { sha3_256 } from 'js-sha3';
import Card from '@material-ui/core/Card';
import CommonHeader from '@/common/View/CommonHeader';
import CenteredView from '@/common/View/CenteredView';
import EcosystemCard from './EcosystemCard';
import cards from './cards';

const useStyles = (theme: Theme) => createStyles({
  [theme.breakpoints.down('xs')]: {
    gridCards: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: `${theme.spacing(1) * 2}px ${theme.spacing(1) * 2}px`,
      padding: theme.spacing(1) * 2,
    },
  },
  [theme.breakpoints.up('sm')]: {
    gridCards: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: `${theme.spacing(1) * 2}px ${theme.spacing(1) * 2}px`,
      padding: theme.spacing(1) * 2,
    },
  },
  [theme.breakpoints.up('lg')]: {
    gridCards: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: `${theme.spacing(1) * 2}px ${theme.spacing(1) * 2}px`,
      padding: theme.spacing(1) * 2,
    },
  },
});

interface IndexProps {
  classes: any;
  t: any;
}

class Index extends PureComponent<IndexProps> {
  render() {
    const { t, classes } = this.props;
    const title = t('header.ecosystems');
    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <CenteredView>
          <Card>
            <CommonHeader name={title} pluralName={title} />
            <div className={classes.gridCards}>
              {cards.map(({ link, image, cover }, index) => (
                <EcosystemCard
                  key={sha3_256(t(`ecosystems.cards.title_${index}`))}
                  title={t(`ecosystems.cards.title_${index}`)}
                  description={t(`ecosystems.cards.description_${index}`)}
                  link={link}
                  image={image}
                  cover={cover}
                />
              ))}
            </div>
          </Card>
        </CenteredView>
      </div>
    );
  }
}

export default withStyles(useStyles)(withTranslation()(Index));

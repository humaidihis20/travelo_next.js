import styles from '../SecondSection/SecondSection.module.css';

import Container from 'components/Container';

import PromoCarousel from './PromoCarousel';

import 'react-multi-carousel/lib/styles.css';

const SecondSection = () => {
    return (
        <section className={styles.section}>
            <Container>
                <PromoCarousel />
            </Container>
        </section>
    )
}

export default SecondSection;
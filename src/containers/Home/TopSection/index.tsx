import styles from './TopSection.module.css'

import Button from 'components/Button';

import Container from 'components/Container';

import InfoItem from './InfoItem';

const TopSection = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col pt-[112px] pb-[58px]">
                    <div className="flex flex-col mb-[174px]">
                        <h1 className="text-heading-2 font-bold font-label text-gray-100 w-[500px] mb-8 capitalize">
                            Jelajahi dunia yang indah dengan satu sentuhan
                        </h1>

                        <p className="text-heading-3 text-gray-70 w-[526px] mb-7 capitalize">
                            Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket di travel kamu akan dapatkan pelayanan terbaik untuk wisata liburanmu kemana saja dan kapan saja
                        </p>

                        <Button>
                            Lihat Paket
                        </Button>
                    </div>

                    <div className="flex gap-40 mx-auto">
                        <InfoItem 
                            label="+30"
                            subLabel="Negara"
                        />

                        <InfoItem 
                            label="+1500"
                            subLabel="Penginapan"
                        />

                        <InfoItem 
                            label="+100"
                            subLabel="Tempat Wisata"
                        />

                        <InfoItem 
                            label="+50.000"
                            subLabel="Pelanggan"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default TopSection;
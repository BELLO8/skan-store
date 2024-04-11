import React from 'react';
import { Footer } from '../../components/Footer';

export const Term = () => {
    return (
        <>
            <div className='mt-8 px-4 lg:px-32 py-8 flex justify-center'>
                <div className='lg:w-10/12'>
                    <h1 className='text-5xl font-extrabold'>
                        Termes & Conditions d'utilisation de Treiize Taxi
                    </h1>
                    <p className='mt-8'>
                        Ces termes et conditions régissent votre utilisation du site web et des services proposés par Treiize Taxi.
                        En utilisant notre site web et nos services, vous acceptez ces termes dans leur intégralité.
                        Si vous n'acceptez pas ces termes, veuillez ne pas utiliser notre site web ou nos services.
                    </p>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Utilisation du Service</h1>
                        <p className='mt-2'>
                            Vous devez avoir au moins 18 ans pour utiliser nos services.
                            Vous êtes seul responsable de l'utilisation de votre compte Treiize Taxi.
                            Vous ne devez pas utiliser nos services à des fins illégales ou non autorisées.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Commandes de Taxi</h1>
                        <p className='mt-2'>
                            Les commandes de taxi sont soumises à la disponibilité des chauffeurs.
                            Nous nous efforçons de fournir des estimations précises des délais d'attente,
                            mais ils peuvent varier en fonction des conditions de circulation et d'autres facteurs.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Paiements</h1>
                        <p className='mt-2'>
                            Les frais de taxi sont basés sur les tarifs en vigueur au moment de la commande.
                            Les paiements sont traités via des méthodes sécurisées et les informations de paiement sont cryptées.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Annulations & Remboursements</h1>
                        <p className='mt-2'>
                            Les annulations peuvent être soumises à des frais, selon le moment où elles sont effectuées.
                            Les demandes de remboursement seront examinées au cas par cas.
                        </p>
                    </div>


                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Propriété intellectuelle</h1>
                        <p className='mt-2'>
                            Le contenu de ce site web est la propriété de Treiize Taxi et est protégé par les lois sur le droit d'auteur et les marques de commerce.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Limitation de Responsabilité</h1>
                        <p className='mt-2'>
                            Nous nous efforçons de fournir des services fiables, mais nous ne pouvons garantir l'exactitude ou la disponibilité à tout moment.
                            En aucun cas, Treiize Taxi ne sera responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs découlant de l'utilisation de nos services.
                        </p>
                    </div>


                    <div className='mt-8'>
                        <h1 className='text-xl font-bold'>Modifications des Termes</h1>
                        <p className='mt-2'>
                            Nous nous réservons le droit de modifier ces termes à tout moment. Les modifications seront effectives dès leur publication sur notre site web.
                            En utilisant nos services, vous acceptez de vous conformer à ces termes et conditions. Si vous avez des questions concernant ces termes, veuillez nous contacter à l'adresse fournie sur notre site web.
                        </p>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

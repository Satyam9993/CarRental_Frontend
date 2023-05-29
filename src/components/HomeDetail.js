import React from 'react';
import Logo from '../assets/logo.png';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, BanknotesIcon } from '@heroicons/react/20/solid';

const HomeDetail = () => {
    const features = [
        {
            name: 'Demand Vehicle from anywhere!',
            description:
                'Imagine a world where transportation is effortless and convenient, where you can summon a vehicle to your exact location with just a few taps on your smartphone. With the "Demand Vehicle from anywhere" service, this vision becomes a reality.',
            icon: CloudArrowUpIcon,
        },
        {
            name: 'Secure and Tested Vehicle',
            description: 'It refers to a vehicle that has undergone rigorous testing and meets high standards of safety and security. It implies that the vehicle has been thoroughly evaluated, inspected, and certified to ensure its reliability, durability, and compliance with relevant regulations.',
            icon: LockClosedIcon,
        },
        {
            name: 'Minimun Price and hight enjoyment',
            description: 'Introducing an incredible opportunity to maximize your enjoyment without stretching your budget – the perfect blend of minimum price and high enjoyment. Imagine being able to indulge in exciting experiences and entertainment without worrying about exorbitant costs..',
            icon: BanknotesIcon,
        },
    ]
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-[#fa5c43]">Drive Secure, Safe and At Your prefference</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better Drive, Makes you happy!</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                            Discover the transformative power of a better drive that brings happiness to your journey. Picture yourself behind the wheel, feeling a sense of exhilaration and contentment as you navigate the open road.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#fa5c43]" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src={Logo}
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeDetail

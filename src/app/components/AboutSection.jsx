"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { Ultra } from 'next/font/google'

const TAB_DATA = [
    {
        title: "Frontend",
        id: "frontend",
        content: (
            <ul className='list-disc pl-2'>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title: "Backend",
        id: "backend",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>Git</li>
                <li>Vercel</li>
            </ul>
        )
    },
    {
        title: "Game Dev",
        id: "gamedev",
        content: (
            <ul className='list-disc pl-2'>
                <li>Pixel art</li>
                <li>RPG maker</li>
                <li>Gamemaker</li>
                <li>Godot</li>
            </ul>
        )
    },
    {
        title: "Formação",
        id: "formação",
        content: (
            <ul className='list-disc pl-2'>
                <li>Superior em Análise e desenvolvimento de Sistemas (2º período)</li>
            </ul>
        )
    },
    {
        title: "Experiência",
        id: "experiência",
        content: (
            <ul className='list-disc pl-2'>
                <li>Freelancer</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("frontend");
    const [isPending, startTransition,] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image className='rounded-lg'
                    src="/images/about-image.png"
                    alt="about image"
                    width={500}
                    height={500}
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>Sobre Mim <span className='text-green-500'>( )</span></h2>
                    <p className='text-base lg:text-lg'>
                        Tenho experiência como freelancer em alguns projetos que utilizam JavaScript e Typescript. além de frameworks como React e Nextjs. <br />No meu tempo livre procuro aprender sobre desenvolvimento de jogos em engines gratuitas como gamemaker e godot.<br />Aprendo rápido e estou sempre buscando expandir meus conhecimentos e habilidades, trabalhando bem em equipe.  Estou animado para continuar criando aplicações incríveis.
                    </p>
                    <div className='flex flex-row  justify-start mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange("frontend")}
                            active={tab === 'frontend'}
                        >
                            {" "}
                            Frontend{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("backend")}
                            active={tab === 'backend'}
                        >
                            {" "}
                            Backend{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("gamedev")}
                            active={tab == 'gamedev'}
                        >
                            {" "}
                            Game Dev{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("formação")}
                            active={tab === 'formação'}
                        >
                            {" "}
                            Formação{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experiência")}
                            active={tab === 'experiência'}
                        >
                            {" "}
                            Experiência{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection

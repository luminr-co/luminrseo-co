export interface ServiceEntity{
    title: string,
    description: string,
    image: React.ReactNode,
    link?: string;
    variant?: 'imgRight' | 'imgLeft',
}
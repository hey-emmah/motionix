import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface FadeInProps {
    delay?: number;
    duration?: number;
    children: React.ReactNode;
    className?: string;
}
declare const FadeIn: React.FC<FadeInProps>;

declare function cn(...classes: Array<string | false | null | undefined>): string;

declare const tokens: {
    readonly colors: {
        readonly primary: "#6C63FF";
        readonly accent: "#00E6A8";
        readonly background: "#0B0F19";
        readonly surface: "#0F1724";
        readonly text: "#FFFFFF";
    };
    readonly radii: {
        readonly sm: 6;
        readonly md: 8;
        readonly lg: 12;
    };
};

export { Button, type ButtonProps, FadeIn, cn, tokens };

export interface propsStyle {
    children: React.ReactNode;
    expand: boolean
    onClick: () => void; 
    "aria-expanded": boolean; 
    "aria-label": string;
}
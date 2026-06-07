import React from 'react';
import { SHOP_PRODUCTS } from '../data/content';
import { LiquidButton } from '../components/shared/LiquidButton';
import { useMagnetic } from '../hooks/useMagnetic';

export const ShopView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-40">
      {SHOP_PRODUCTS.map(p => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
};

const ProductCard = ({ p }) => {
  const ref = useMagnetic(0.5);
  return (
    <div ref={ref} className="glass-card fresnel-border p-8 rounded-3xl space-y-6">
      <div className="h-32 bg-white/5 rounded-2xl" />
      <h3 className="text-xl font-bold">{p.name}</h3>
      <p className="text-xs text-white/40 leading-relaxed">{p.desc}</p>
      <div className="flex justify-between items-center">
        <span className="font-mono text-accent">${p.price}</span>
        <LiquidButton>Acquire</LiquidButton>
      </div>
    </div>
  );
};

import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500 fill-red-500" /> by Roshan Kumar
          </p>
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

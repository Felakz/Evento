import { useState, useEffect } from 'react'
import imagen1 from './assets/imagen1.jpg'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-09-12T16:00:00') // 12 de septiembre a las 4:00 PM
    
    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-[28px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
        
        {/* Header con imagen de fondo real */}
        <div className="relative h-80 overflow-hidden">
          {/* Imagen de fondo real */}
          <div className="absolute inset-0">
            <img 
              src={imagen1} 
              alt="ACTIVZ 2025 Tour Corporativo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log('Error cargando imagen:', e);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => {
                console.log('Imagen cargada correctamente');
              }}
            />
            {/* Fallback si la imagen no carga */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"></div>
          </div>
          
          {/* Overlay oscuro para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          
          {/* Tag superior */}
          <div className="absolute top-6 left-6 bg-black bg-opacity-70 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white text-sm font-semibold">Salud - Epigenética</span>
          </div>
          
          {/* Overlay de degradado inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
          
          {/* Título principal sobre la imagen */}
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl font-black text-white mb-2 leading-tight drop-shadow-lg">
              ACTIVZ 2025
            </h1>
            <p className="text-gray-200 text-sm leading-relaxed drop-shadow-md">
              Tour Corporativo (Sudamerica)
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="p-8 bg-white">
          {/* Grid de información del evento */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 hover:bg-blue-100 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Fecha</span>
              </div>
              <p className="text-sm font-black text-gray-900">Viernes, 12 de Septiembre 2025</p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-5 border border-green-100 hover:bg-green-100 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Hora</span>
              </div>
              <p className="text-sm font-black text-gray-900">4:00 PM | 7:00 PM</p>
            </div>
            
            <div className="bg-red-50 rounded-2xl p-5 border border-red-100 hover:bg-red-100 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Lugar</span>
              </div>
              <p className="text-sm font-black text-gray-900">Hotel San Agustín Riviera – Salones 9, 10 y 11</p>
            </div>
            
            <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100 hover:bg-yellow-100 transition-colors">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider">Capacidad</span>
              </div>
              <p className="text-sm font-black text-gray-900">2.000 personas</p>
            </div>
          </div>

          {/* Sección de countdown */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <p className="text-lg text-gray-600 font-semibold mb-2">Tiempo restante para el evento</p>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-xl">
                <div className="text-4xl font-black text-white mb-2">{timeLeft.days.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-300 font-bold uppercase tracking-wider">DÍAS</div>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-xl">
                <div className="text-4xl font-black text-white mb-2">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-300 font-bold uppercase tracking-wider">HORAS</div>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-xl">
                <div className="text-4xl font-black text-white mb-2">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-300 font-bold uppercase tracking-wider">MINUTOS</div>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-xl">
                <div className="text-4xl font-black text-white mb-2">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-300 font-bold uppercase tracking-wider">SEGUNDOS</div>
              </div>
            </div>
            
            <p className="text-center text-lg text-purple-600 font-black">
              No te pierdas esta experiencia única!
            </p>
          </div>

          {/* Descripción del evento */}
          <div className="bg-gradient-to-r from-gray-50 via-purple-50 to-pink-50 rounded-2xl p-6 mb-8 border border-purple-100">
            <h3 className="font-black text-gray-900 mb-4 text-xl">Sobre el Evento</h3>
            <p className="text-sm text-gray-700 leading-relaxed font-medium mb-4">
              Prepárate para una experiencia única con nuestra presentación de oportunidad. 
              Un evento diseñado para descubrir nuevas posibilidades y conectar con los mejores.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <h4 className="font-black text-purple-800 mb-2">4:00 PM - Primera Sección</h4>
                <p className="text-xs text-gray-600">Capacitación</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-pink-200">
                <h4 className="font-black text-pink-800 mb-2">7:00 PM - Segunda Sección</h4>
                <p className="text-xs text-gray-600">Presentación de oportunidad</p>
              </div>
            </div>
          </div>

          {/* Lo más destacado */}
          <div className="mb-8">
            <h3 className="font-black text-gray-900 mb-6 text-xl">Lo Más Destacado</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center bg-blue-50 rounded-xl p-4 border border-blue-100 hover:bg-blue-100 transition-all">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="font-black text-blue-900">Sorteos especiales</span>
              </div>
              <div className="flex items-center bg-green-50 rounded-xl p-4 border border-green-100 hover:bg-green-100 transition-all">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="font-black text-green-900">Regalos para los invitados</span>
              </div>
              <div className="flex items-center bg-red-50 rounded-xl p-4 border border-red-100 hover:bg-red-100 transition-all">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="font-black text-red-900">Capacitación exclusiva</span>
              </div>
              <div className="flex items-center bg-yellow-50 rounded-xl p-4 border border-yellow-100 hover:bg-yellow-100 transition-all">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="font-black text-yellow-900">Beneficios únicos por asistir</span>
              </div>
              <div className="flex items-center bg-purple-50 rounded-xl p-4 border border-purple-100 hover:bg-purple-100 transition-all">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="font-black text-purple-900">Testimonios en vivo que inspiran</span>
              </div>
              <div className="flex items-center bg-pink-50 rounded-xl p-4 border border-pink-100 hover:bg-pink-100 transition-all">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="font-black text-pink-900">Guía de bienestar</span>
              </div>
            </div>
          </div>

          {/* Oferta Especial de Movilidad */}
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-2xl p-6 mb-6 shadow-xl border-4 border-yellow-300">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <span className="text-2xl mr-2">🚌</span>
                <h3 className="text-xl font-black text-white">¡OFERTA ESPECIAL!</h3>
              </div>
              <p className="text-lg font-black text-white mb-2">
                ¿Vives en Los Olivos? ¡Te llevamos GRATIS!
              </p>
              <p className="text-sm text-yellow-100 font-semibold">
                Transporte de ida y vuelta incluido para residentes de Los Olivos
              </p>
            </div>
          </div>

          {/* Botón de reserva */}
          <a 
            href="https://bit.ly/GrupoActivaTuLiderazgo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg mb-4 text-center"
          >
            📱 Reservar Entrada
          </a>
          
          <p className="text-center text-sm text-gray-600 font-bold">
            Únete a nuestro grupo para reservar tu entrada
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 px-8 py-6">
          <h4 className="text-white font-black mb-4 text-lg">Información de Contacto</h4>
          <div className="text-sm text-gray-300 space-y-3 font-medium">
            <div className="flex items-center">
              <span className="mr-4 text-lg">📞</span>
              <span>(+51) 900653836</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-lg">✉️</span>
              <span>mirianmautino11@gmail.com</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-lg">🌐</span>
              <a 
                href="https://miriam-mautino.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                miriam-mautino.vercel.app
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-5 font-semibold">
            Síguenos en nuestras redes sociales para más actualizaciones
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

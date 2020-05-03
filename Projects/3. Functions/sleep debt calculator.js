const getSleepHours = day => {
    switch (day.toLowerCase().trim().replace('-', '').replace('feira', '')) {
      case 'segunda':
        return 6;
        break;
      case 'terça':
        return 6;
        break;
      case 'quarta':
        return 6;
        break;
      case 'quinta':
        return 6;
        break;
      case 'sexta':
        return 6;
        break;
      case 'sábado':
        return 8;
        break;
      case 'domingo':
        return 8;
        break;
      default:
        return 'Dia inválido';
        break;
    }
  }
  
  const getActualSleepHours = () => {
    const dias = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
    let soma = 0;
    
    for (let i = 0; i < dias.length; i++) {
      soma += getSleepHours(dias[i]);
    }
    return soma;
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours == idealSleepHours)
      console.log('Perfeito!');
    else if (actualSleepHours >= idealSleepHours)
      console.log(`Você dorme demais! Tempo a mais por dia: ${Math.round((actualSleepHours - idealSelepHours) / 7, 2)}`);
    else
      console.log(`Você precisa descansar! Tempo a mais necessário por dia: ${Math.round((idealSleepHours - actualSleepHours) / 7), 2}`);
  }
  
  calculateSleepDebt();  
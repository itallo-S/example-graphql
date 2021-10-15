interface Impressora {
  imprimir: () => void;
  fazerBarulho: () => void;
}

class Impressora3D implements Impressora {
  imprimir() {
    console.log('imprimindo 3D')
  }
  fazerBarulho() {
    console.log('barulho 3d')
  }
}

class ImpressoraTinta implements Impressora {
  imprimir() {
    console.log('imprimindo via tinta')
  }

  fazerBarulho() {
    console.log('barulho tinta')
  }
}

class ImpressoraService {

  imprimir = (impressora: Impressora) => {
    impressora.imprimir();
  }
}

class Main {

  private impressoraService = new ImpressoraService();

  imprimir() {
    const impressora: Impressora3D = new Impressora3D();
    this.impressoraService.imprimir(impressora);
  }
}

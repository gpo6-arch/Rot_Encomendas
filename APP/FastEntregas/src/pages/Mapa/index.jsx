import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import axios from "axios";

export default function Mapa() {
  const [pontos, setPontos] = useState([]);
  const [rota, setRota] = useState([]);

  async function carregarRota() {
    try {
      const response = await axios.get("http://SEU_BACKEND/rotas/1");
      
      setPontos(response.data.pontos);
      setRota(response.data.rota);
    } catch (error) {
      console.log("Erro ao carregar rota:", error);
    }
  }

  useEffect(() => {
    carregarRota();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.5505,
          longitude: -46.6333,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        {pontos.map((p, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: p.lat, longitude: p.lng }}
            title={`Entrega #${p.id}`}
          />
        ))}

        {rota.length > 1 && (
          <Polyline
            coordinates={ rota.map(r => ({ latitude: r.lat, longitude: r.lng })) }
            strokeWidth={5}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

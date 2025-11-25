import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Linking from "expo-linking";
import axios from "axios";

export default function Mapa({ route }) {
  const [pontos, setPontos] = useState([]);
  const [rota, setRota] = useState([]);
  const [info, setInfo] = useState(null);

  const motoristaId = route?.params?.motoristaId ?? 1;

  async function gerarRota() {
    try {
      const response = await axios.get(`http://SEU_BACKEND/rotas/${motoristaId}`);

      setPontos(response.data.pontos || []);
      setRota(response.data.rota || []);
      setInfo(response.data.info || null);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível gerar a rota.");
    }
  }

  function abrirGoogleMapsComRota() {
    if (!pontos || pontos.length < 2) {
      return Alert.alert("Erro", "Gere uma rota primeiro.");
    }

    const origem = `${pontos[0].lat},${pontos[0].lng}`;
    const destinos = pontos.slice(1).map(p => `${p.lat},${p.lng}`).join("/");

    const url = `https://www.google.com/maps/dir/${origem}/${destinos}`;
    Linking.openURL(url);
  }

  function abrirWaze() {
    if (!pontos || pontos.length < 2) {
      return Alert.alert("Erro", "Gere uma rota primeiro.");
    }

    const ponto = pontos[1];
    const url = `https://waze.com/ul?ll=${ponto.lat},${ponto.lng}&navigate=yes`;
    Linking.openURL(url);
  }

  async function finalizarRota() {
    try {
      await axios.post(`http://SEU_BACKEND/rotas/${motoristaId}/finalizar`, {
        rota,
        info,
      });

      Alert.alert("Sucesso", "Rota finalizada.");
      setPontos([]);
      setRota([]);
      setInfo(null);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível finalizar a rota.");
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: pontos[0]?.lat ?? -23.55,
          longitude: pontos[0]?.lng ?? -46.63,
          latitudeDelta: 0.08,
          longitudeDelta: 0.04,
        }}
      >
        {pontos.map((p) => (
          <Marker
            key={p.id ?? `${p.lat}-${p.lng}`}
            coordinate={{ latitude: p.lat, longitude: p.lng }}
            title={`Entrega ${p.id}`}
          />
        ))}

        {rota.length > 1 && (
          <Polyline
            coordinates={rota.map(r => ({
              latitude: r.lat,
              longitude: r.lng,
            }))}
            strokeWidth={4}
            strokeColor="blue"
          />
        )}
      </MapView>

      <View style={styles.infoBox}>
        {info ? (
          <>
            <Text style={styles.infoText}>
              Distância: {info.distancia_total_km} km
            </Text>
            <Text style={styles.infoText}>
              Tempo: {info.tempo_estimado_min} min
            </Text>
            <Text style={styles.infoText}>
              Pontos: {pontos.length}
            </Text>
          </>
        ) : (
          <Text style={styles.infoText}>Clique em Gerar Rota</Text>
        )}
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={gerarRota}>
          <Text style={styles.btnText}>Gerar Rota</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={abrirGoogleMapsComRota}>
          <Text style={styles.btnText}>Google Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={abrirWaze}>
          <Text style={styles.btnText}>Waze</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#d32f2f" }]}
          onPress={finalizarRota}
        >
          <Text style={styles.btnText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "62%" },
  infoBox: {
    height: 70,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  infoText: { fontSize: 16, fontWeight: "600" },
  buttons: {
    height: "28%",
    padding: 10,
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "#1976d2",
    padding: 12,
    borderRadius: 8,
  },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "700" },
});

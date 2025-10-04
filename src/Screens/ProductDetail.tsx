import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" color="white" size={28} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="share" color="white" size={28} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageWrapper}>
          <ImageBackground
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx1xn8i1HeRreSZ-1TG7yCNpKvLWNYZqqcHsrwtmU5m210D0LcS-Uek5TqGjBCy5IZ3nFdn2NWiXCwCoxoH6aAj-A9g7fx4CeyGH4InpZ4c1XsV0PUxrunt9aVACurMA71t1VgzM22k2yrApMTR52aqcHXhGtR5IqRoKWcSRFP1sj2LIVqu0u0c1mUAvTRtJuwyA9ji2g9ScHzmEJjUIdOsLEksTvvVrLgDT7FeoxhpTCImQ8wDYjWNge8xOh028N2ujgLPIupnJOR',
            }}
            style={styles.productImage}
            imageStyle={{ borderRadius: 16 }}
            resizeMode="cover"
          />
        </View>

        {/* Title + Price */}
        <Text style={styles.title}>Luxury Smartwatch X</Text>
        <Text style={styles.price}>
          $1,299 <Text style={styles.oldPrice}>(20% off) $1,625</Text>
        </Text>
        <Text style={styles.description}>
          Experience the future of personal technology. Unrivaled audio clarity,
          crafted for the audiophile.
        </Text>

        {/* Specifications */}
        <View style={styles.specContainer}>
          <Text style={styles.specTitle}>Specifications</Text>
          <View style={styles.specGrid}>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Battery Life</Text>
              <Text style={styles.specValue}>24h</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Connectivity</Text>
              <Text style={styles.specValue}>Bluetooth 5.2</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Material</Text>
              <Text style={styles.specValue}>Aerospace-grade aluminum</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Water Resistance</Text>
              <Text style={styles.specValue}>5 ATM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Sticky Bottom Bar */}
      <View style={styles.bottomBar}>
        {/* Quantity Selector */}
        <View style={styles.qtyContainer}>
          <TouchableOpacity
            onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            style={styles.qtyButton}
          >
            <MaterialIcons name="remove" color="white" size={20} />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => setQuantity(quantity + 1)}
            style={styles.qtyButton}
          >
            <MaterialIcons name="add" color="white" size={20} />
          </TouchableOpacity>
        </View>

        {/* Add to Cart */}
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingBottom: 8,
  },
  imageWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  productImage: {
    width: '100%',
    height: 280,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  price: {
    fontSize: 16,
    color: '#14B8A6', // teal
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  oldPrice: {
    color: '#9CA3AF', // gray
    textDecorationLine: 'line-through',
  },
  description: {
    fontSize: 16,
    color: '#F5F5F5',
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  specContainer: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  specTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F5F5F5',
    marginBottom: 12,
  },
  specGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specItem: {
    width: '48%',
    marginBottom: 12,
  },
  specLabel: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  specValue: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#121212',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  qtyButton: {
    backgroundColor: 'rgba(147,51,234,0.5)', // purple
    borderRadius: 50,
    padding: 6,
  },
  qtyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
  cartButton: {
    flex: 1,
    height: 56,
    marginLeft: 16,
    borderRadius: 50,
    backgroundColor: '#9333EA',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#9333EA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

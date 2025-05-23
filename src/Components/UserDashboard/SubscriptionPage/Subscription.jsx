import { useState, useEffect } from 'react';

export default function SubscriptionPage() {
  const [activeTab, setActiveTab] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate discounted yearly prices
  const getPrice = (monthlyPrice, billingCycle) => {
    if (billingCycle === 'yearly') {
      return (monthlyPrice * 0.85).toFixed(0); // 15% discount
    }
    return monthlyPrice;
  };

  // Plans data
  const plans = {
    starter: {
      name: "Starter",
      monthlyPrice: 49,
      features: [
        { text: "Up to 5 active affiliates", included: true },
        { text: "Basic commission structure", included: true },
        { text: "Standard dashboard", included: true },
        { text: "Email support", included: true },
        { text: "Advanced analytics", included: false },
        { text: "Multi-level commissions", included: false },
        { text: "Priority support", included: false },
        { text: "Custom branding", included: false },
      ]
    },
    professional: {
      name: "Professional",
      monthlyPrice: 99,
      popular: true,
      features: [
        { text: "Up to 50 active affiliates", included: true },
        { text: "Multi-level commissions", included: true },
        { text: "Advanced dashboard", included: true },
        { text: "Priority email support", included: true },
        { text: "Performance reports", included: true },
        { text: "Team management tools", included: true },
        { text: "Custom branding", included: false },
        { text: "API access", included: false },
        { text: "Dedicated account manager", included: false },
      ]
    },
    enterprise: {
      name: "Enterprise",
      monthlyPrice: 199,
      features: [
        { text: "Unlimited affiliates", included: true },
        { text: "Custom commission structures", included: true },
        { text: "Premium dashboard", included: true },
        { text: "Priority 24/7 support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "White-label solution", included: true },
        { text: "API access", included: true },
        { text: "Dedicated account manager", included: true },
      ]
    }
  };

  // Add-ons data
  const addons = [
    {
      id: "ai-trading",
      name: "AI Trading Bot",
      description: "Automated trading solutions with advanced algorithms",
      price: 59,
      icon: "🤖",
      color: "#8b5cf6" // purple-500
    },
    {
      id: "money-managers",
      name: "Money Managers",
      description: "Professional fund managers to optimize your portfolio",
      price: 79,
      icon: "💼",
      color: "#ef4444" // red-500
    },
    {
      id: "copy-trading",
      name: "Copy Trading",
      description: "Automatically copy trades from successful traders",
      price: 39,
      icon: "📋",
      color: "#3b82f6" // blue-500
    }
  ];

  // Feature comparison data
  const featureComparison = [
    { name: "Affiliate Limit", starter: "5", professional: "50", enterprise: "Unlimited" },
    { name: "Commission Levels", starter: "1 level", professional: "3 levels", enterprise: "Unlimited levels" },
    { name: "Analytics", starter: "Basic", professional: "Advanced", enterprise: "Enterprise-grade" },
    { name: "Support", starter: "Email only", professional: "Priority email", enterprise: "24/7 dedicated" },
    { name: "Custom Branding", starter: false, professional: false, enterprise: true },
    { name: "API Access", starter: false, professional: false, enterprise: true }
  ];

  // Handle plan selection
  const handleSelectPlan = (planKey) => {
    setSelectedPlan(planKey);
    setShowConfirmation(true);
  };

  // Handle addon selection
  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => {
      if (prev.includes(addonId)) {
        return prev.filter(id => id !== addonId);
      } else {
        return [...prev, addonId];
      }
    });
  };

  // Calculate total price
  const calculateTotal = () => {
    if (!selectedPlan) return 0;
    
    let total = getPrice(plans[selectedPlan].monthlyPrice, activeTab);
    
    selectedAddons.forEach(addonId => {
      const addon = addons.find(a => a.id === addonId);
      if (addon) {
        total += getPrice(addon.price, activeTab);
      }
    });
    
    return total;
  };

  return (
    <div style={{ 
      backgroundColor: "#111827", 
      color: "#ffffff", 
      minHeight: "100vh", 
      padding: "1rem" 
    }}>
      <div style={{ 
        maxWidth: "72rem", 
        marginLeft: "auto", 
        marginRight: "auto" 
      }}>
        {/* Header Section */}
        <div style={{ 
          marginBottom: "3rem", 
          textAlign: "center" 
        }}>
          <h1 style={{ 
            fontSize: "2.25rem", 
            fontWeight: "700", 
            marginBottom: "0.5rem" 
          }}>Subscription Plans</h1>
          <p style={{ color: "#9ca3af" }}>Choose the perfect plan for your affiliate business needs</p>
          
          {/* Billing Toggle */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            marginTop: "2rem" 
          }}>
            <div style={{ 
              backgroundColor: "#1f2937", 
              padding: "0.25rem", 
              borderRadius: "9999px", 
              display: "inline-flex" 
            }}>
              <button 
                style={{ 
                  padding: "0.5rem 1.5rem", 
                  borderRadius: "9999px", 
                  backgroundColor: activeTab === 'monthly' ? "#14b8a6" : "transparent", 
                  color: activeTab === 'monthly' ? "#ffffff" : "#d1d5db" 
                }}
                onClick={() => setActiveTab('monthly')}
              >
                Monthly
              </button>
              <button 
                style={{ 
                  padding: "0.5rem 1.5rem", 
                  borderRadius: "9999px", 
                  backgroundColor: activeTab === 'yearly' ? "#14b8a6" : "transparent", 
                  color: activeTab === 'yearly' ? "#ffffff" : "#d1d5db" 
                }}
                onClick={() => setActiveTab('yearly')}
              >
                Yearly
              </button>
              <div style={{ 
                marginLeft: "0.5rem", 
                backgroundColor: "rgba(20, 184, 166, 0.2)", 
                padding: "0.5rem 0.75rem", 
                borderRadius: "9999px", 
                fontSize: "0.875rem", 
                color: "#5eead4" 
              }}>
                Save 15%
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: window.innerWidth >= 768 ? "repeat(3, 1fr)" : "repeat(1, 1fr)", 
          gap: "1.5rem", 
          marginBottom: "3rem"
        }}>
          {/* Generate plan cards dynamically */}
          {Object.entries(plans).map(([key, plan]) => (
            <div 
              key={key}
              style={{ 
                backgroundColor: "#1f2937", 
                padding: "1.5rem", 
                borderRadius: "0.5rem", 
                border: plan.popular ? "2px solid #14b8a6" : "1px solid #374151",
                position: plan.popular ? "relative" : "static"
              }}
            >
              {plan.popular && (
                <div style={{
                  position: "absolute",
                  top: "-0.75rem",
                  right: "1.5rem",
                  backgroundColor: "#14b8a6",
                  color: "#ffffff",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: "500"
                }}>
                  Most Popular
                </div>
              )}
              <h2 style={{ 
                fontSize: "1.5rem", 
                fontWeight: "700", 
                marginBottom: "1rem" 
              }}>{plan.name}</h2>
              <div style={{ 
                fontSize: "1.875rem", 
                fontWeight: "700", 
                marginBottom: "1.5rem" 
              }}>
                ${getPrice(plan.monthlyPrice, activeTab)} <span style={{ 
                  color: "#9ca3af", 
                  fontSize: "1.125rem", 
                  fontWeight: "400" 
                }}>/{activeTab === 'monthly' ? 'month' : 'month, billed yearly'}</span>
              </div>
              
              <ul style={{ marginBottom: "2rem" }}>
                {plan.features.map((feature, index) => (
                  <li key={index} style={{ 
                    display: "flex", 
                    alignItems: "flex-start",
                    color: !feature.included ? "#9ca3af" : "#ffffff",
                    marginBottom: "0.75rem"
                  }}>
                    <span style={{ 
                      color: feature.included ? "#10b981" : "#6b7280", 
                      marginRight: "0.5rem" 
                    }}>
                      {feature.included ? '✓' : '✗'}
                    </span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                style={{ 
                  width: "100%", 
                  padding: "0.75rem 0", 
                  backgroundColor: plan.popular ? "#14b8a6" : "#374151", 
                  color: "#ffffff", 
                  borderRadius: "0.25rem", 
                  fontWeight: "500", 
                  transition: "background-color 0.2s"
                }}
                onClick={() => handleSelectPlan(key)}
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>
        
        {/* Add-ons Section */}
        <div style={{ marginTop: "4rem" }}>
          <h2 style={{ 
            fontSize: "1.5rem", 
            fontWeight: "700", 
            marginBottom: "1.5rem" 
          }}>Available Add-ons</h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: window.innerWidth >= 768 ? "repeat(3, 1fr)" : "repeat(1, 1fr)", 
            gap: "1.5rem", 
            marginBottom: "3rem"
          }}>
            {/* Generate add-on cards dynamically */}
            {addons.map((addon) => (
              <div 
                key={addon.id}
                style={{ 
                  backgroundColor: "#1f2937", 
                  padding: "1.5rem", 
                  borderRadius: "0.5rem", 
                  border: selectedAddons.includes(addon.id) ? "1px solid #14b8a6" : "1px solid #374151" 
                }}
              >
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  marginBottom: "1rem" 
                }}>
                  <div style={{ 
                    width: "2rem", 
                    height: "2rem", 
                    backgroundColor: addon.color, 
                    borderRadius: "0.25rem", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginRight: "0.5rem" 
                  }}>
                    <span role="img" aria-label={addon.name}>{addon.icon}</span>
                  </div>
                  <h3 style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "700" 
                  }}>{addon.name}</h3>
                </div>
                <p style={{ 
                  color: "#9ca3af", 
                  marginBottom: "1rem" 
                }}>{addon.description}</p>
                <div style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "700", 
                  marginBottom: "1.5rem" 
                }}>
                  ${getPrice(addon.price, activeTab)} <span style={{ 
                    color: "#9ca3af", 
                    fontSize: "1.125rem", 
                    fontWeight: "400" 
                  }}>/{activeTab === 'monthly' ? 'month' : 'month, billed yearly'}</span>
                </div>
                <button 
                  style={{ 
                    width: "100%", 
                    padding: "0.75rem 0", 
                    backgroundColor: selectedAddons.includes(addon.id) ? "#14b8a6" : "#374151", 
                    color: "#ffffff", 
                    borderRadius: "0.25rem", 
                    fontWeight: "500", 
                    transition: "background-color 0.2s" 
                  }}
                  onClick={() => toggleAddon(addon.id)}
                >
                  {selectedAddons.includes(addon.id) ? 'Remove from Cart' : 'Add to Subscription'}
                </button>
              </div>
            ))}
          </div>
          
          {/* Comparison Table */}
          <div style={{ 
            backgroundColor: "#1f2937", 
            padding: "1.5rem", 
            borderRadius: "0.5rem", 
            border: "1px solid #374151", 
            marginTop: "2rem" 
          }}>
            <h2 style={{ 
              fontSize: "1.5rem", 
              fontWeight: "700", 
              marginBottom: "0.5rem" 
            }}>Compare All Plans</h2>
            <p style={{ 
              color: "#9ca3af", 
              marginBottom: "1.5rem" 
            }}>Detailed feature comparison for all subscription plans</p>
            
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #374151" }}>
                    <th style={{ 
                      textAlign: "left", 
                      padding: "1rem 1rem 1rem 0" 
                    }}>Feature</th>
                    <th style={{ 
                      textAlign: "center", 
                      padding: "1rem" 
                    }}>Starter</th>
                    <th style={{ 
                      textAlign: "center", 
                      padding: "1rem" 
                    }}>Professional</th>
                    <th style={{ 
                      textAlign: "center", 
                      padding: "1rem" 
                    }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((feature, index) => (
                    <tr key={index} style={{ 
                      borderBottom: index < featureComparison.length - 1 ? "1px solid #374151" : "" 
                    }}>
                      <td style={{ 
                        padding: "1rem 1rem 1rem 0" 
                      }}>{feature.name}</td>
                      <td style={{ 
                        textAlign: "center", 
                        padding: "1rem" 
                      }}>
                        {typeof feature.starter === 'boolean' 
                          ? (feature.starter 
                            ? <span style={{ color: "#10b981" }}>✓</span> 
                            : <span>✗</span>)
                          : feature.starter
                        }
                      </td>
                      <td style={{ 
                        textAlign: "center", 
                        padding: "1rem" 
                      }}>
                        {typeof feature.professional === 'boolean' 
                          ? (feature.professional 
                            ? <span style={{ color: "#10b981" }}>✓</span> 
                            : <span>✗</span>)
                          : feature.professional
                        }
                      </td>
                      <td style={{ 
                        textAlign: "center", 
                        padding: "1rem" 
                      }}>
                        {typeof feature.enterprise === 'boolean' 
                          ? (feature.enterprise 
                            ? <span style={{ color: "#10b981" }}>✓</span> 
                            : <span>✗</span>)
                          : feature.enterprise
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <button style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              marginTop: "2rem", 
              backgroundColor: "#374151", 
              color: "#ffffff", 
              borderRadius: "0.25rem", 
              padding: "0.75rem 1.5rem", 
              transition: "background-color 0.2s" 
            }}>
              <svg style={{ width: "1.25rem", height: "1.25rem", marginRight: "0.5rem" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              Download Full Plan Comparison
            </button>
          </div>
        </div>
      </div>

      {/* Order Summary Modal */}
      {showConfirmation && (
        <div style={{ 
          position: "fixed", 
          inset: "0", 
          backgroundColor: "rgba(0, 0, 0, 0.75)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          padding: "1rem", 
          zIndex: "50" 
        }}>
          <div style={{ 
            backgroundColor: "#1f2937", 
            padding: "1.5rem", 
            borderRadius: "0.5rem", 
            maxWidth: "28rem", 
            width: "100%" 
          }}>
            <h2 style={{ 
              fontSize: "1.5rem", 
              fontWeight: "700", 
              marginBottom: "1rem" 
            }}>Order Summary</h2>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                padding: "0.5rem 0", 
                borderBottom: "1px solid #374151" 
              }}>
                <span>Selected Plan:</span>
                <span style={{ fontWeight: "700" }}>{plans[selectedPlan].name}</span>
              </div>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                padding: "0.5rem 0", 
                borderBottom: "1px solid #374151" 
              }}>
                <span>Billing Cycle:</span>
                <span style={{ 
                  fontWeight: "700", 
                  textTransform: "capitalize" 
                }}>{activeTab}</span>
              </div>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                padding: "0.5rem 0", 
                borderBottom: "1px solid #374151" 
              }}>
                <span>Plan Price:</span>
                <span style={{ fontWeight: "700" }}>${getPrice(plans[selectedPlan].monthlyPrice, activeTab)}/{activeTab === 'monthly' ? 'month' : 'year'}</span>
              </div>
              
              {selectedAddons.length > 0 && (
                <>
                  <div style={{ 
                    padding: "0.5rem 0", 
                    borderBottom: "1px solid #374151" 
                  }}>
                    <span style={{ fontWeight: "700" }}>Selected Add-ons:</span>
                  </div>
                  {selectedAddons.map(addonId => {
                    const addon = addons.find(a => a.id === addonId);
                    return (
                      <div key={addonId} style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        padding: "0.5rem 0", 
                        borderBottom: "1px solid #374151", 
                        paddingLeft: "1rem" 
                      }}>
                        <span>{addon.name}</span>
                        <span>${getPrice(addon.price, activeTab)}/{activeTab === 'monthly' ? 'month' : 'year'}</span>
                      </div>
                    );
                  })}
                </>
              )}
              
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                padding: "1rem 0", 
                fontWeight: "700", 
                fontSize: "1.125rem" 
              }}>
                <span>Total:</span>
                <span>${calculateTotal()}/{activeTab === 'monthly' ? 'month' : 'year'}</span>
              </div>
            </div>
            
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "0.75rem" 
            }}>
              <button style={{ 
                width: "100%", 
                padding: "0.75rem 0", 
                backgroundColor: "#14b8a6", 
                color: "#ffffff", 
                borderRadius: "0.25rem", 
                fontWeight: "500", 
                transition: "background-color 0.2s" 
              }}>
                Proceed to Checkout
              </button>
              <button 
                style={{ 
                  width: "100%", 
                  padding: "0.75rem 0", 
                  backgroundColor: "#374151", 
                  color: "#ffffff", 
                  borderRadius: "0.25rem", 
                  fontWeight: "500", 
                  transition: "background-color 0.2s" 
                }}
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
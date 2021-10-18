import { useEffect, useState } from "react";
import useScript from "./useScript";
import { formConfig } from "../components/MercadoPago/formConfig.js";

export default function useMercadoPago() {
  const [resultPayment, setResultPayment] = useState(undefined);

  const { MercadoPago } = useScript(
    "https://sdk.mercadopago.com/js/v2",
    "MercadoPago"
  );

  useEffect(() => {
    if (MercadoPago) {
      const mp = new MercadoPago(
        "APP_USR-1569881881668547-090901-ed4579cdabdc49ac4f4fa2f5a2ab367e-821158698"
      );
      const cardForm = mp.cardForm({
        amount: "100.5",
        autoMount: true,
        form: formConfig,
        callbacks: {
          onFormMounted: (error) => {
            if (error)
              return console.warn("Form Mounted handling error: ", error);
          },

          onSubmit: (event) => {
            event.preventDefault();

            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              token,
              installments,
              identificationNumber,
              identificationType,
            } = cardForm.getCardFormData();

            fetch(`http://localhost:4000/process-payment`, {
              // entry point backend
              method: "POST",
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Request-Method":
                  "GET, POST, DELETE, PUT, OPTIONS",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token,
                issuer_id,
                payment_method_id,
                transaction_amount: 1000,
                installments: Number(installments),
                description: "Descripción del producto",
                payer: {
                  email,
                  identification: {
                    type: identificationType,
                    number: identificationNumber,
                  },
                },
              }),
            })
              .then((res) => res.json())
              .then((data) => setResultPayment(data))
              .catch((err) => {
                setResultPayment(err);
              });
          },
          onFetching: (resource) => {
            // Animate progress bar
            const progressBar = document.querySelector(".progress-bar");
            progressBar.removeAttribute("value");

            return () => {
              progressBar.setAttribute("value", "0");
            };
          },
        },
      });
    }
  }, [MercadoPago]);

  return resultPayment;
}

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Banco de dados: `nodejsDB`
--
create database nodejsDB;
use nodejsDB;
-- --------------------------------------------------------

--
-- Estrutura para tabela `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) NOT NULL auto_increment primary key,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `passwd`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@admin.adm', '21232f297a57a5a743894a0e4a801fc3', '2022-06-01 18:43:13', '2022-06-01 18:43:13'),
(2, 'Matheus Dutra Souza', 'matheus@gmail.com', '45339359513f09155110f63f7ca91c3e', '2022-06-01 18:43:37', '2022-06-01 18:43:37'),
(3, 'Pedro Henrique Lira da Silva Bispo', 'phenrique@gmail.com', 'c6cc8094c2dc07b700ffcc36d64e2138', '2022-06-01 17:59:08', '2022-06-01 17:59:08'),
(4, 'Rodrigo Silva dos Anjos', 'rodrigo@gmail.com', '2e247e2eb505c42b362e80ed4d05b078', '2022-06-01 18:34:08', '2022-06-01 18:59:35');

-- --------------------------------------------------------

--
-- Estrutura para tabela `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL auto_increment primary key,
  `customer_id` bigint(20) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `amount` double(15,2) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `description`, `amount`, `created_at`, `updated_at`) VALUES
(2, 2, 'Notebooks', 3.00, '2020-06-10 20:20:36', '2020-06-10 20:20:36'),
(3, 2, 'Tablet', 1.00, '2020-06-10 17:35:23', '2020-06-10 17:35:23'),
(4, 2, 'Samsung J8', 2.00, '2020-06-10 17:35:43', '2020-06-10 17:35:43'),
(5, 3, 'Xbox One', 1.00, '2020-06-10 17:59:31', '2020-06-10 17:59:31'),
(6, 3, 'Playstation 3', 1.00, '2020-06-10 17:59:58', '2020-06-10 17:59:58'),
(7, 3, 'Lego Jurassic Park', 5.00, '2020-06-10 18:00:13', '2020-06-10 18:00:13'),
(8, 3, 'Motorola E8', 1.00, '2020-06-10 18:00:30', '2020-06-10 18:00:30'),
(9, 4, 'Tablet Samsung A7', 1.00, '2020-06-10 18:00:42', '2020-06-10 18:00:42'),
(12, 2, 'Pen drive', 12.00, '2020-06-10 20:28:08', '2020-06-10 20:28:08'),
(13, 3, 'Animes', 10.00, '2020-06-10 20:28:55', '2020-06-10 20:28:55');


-- --------------- FIM DAS QUERIES NECESSÁRIAS, DESCONSIDERE TUDO ABAIXO. APENAS USE CASO NECESSÁRIO. --------------- --
--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

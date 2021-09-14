-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema contatos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema contatos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `contatos` DEFAULT CHARACTER SET utf8 ;
USE `contatos` ;

-- -----------------------------------------------------
-- Table `contatos`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contatos`.`usuarios` (
  `id` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(256) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `contatos`.`contatos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contatos`.`contatos` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_contatos_usuarios_idx` (`usuarios_id` ASC),
  CONSTRAINT `fk_contatos_usuarios`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `contatos`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `contatos`.`telefones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contatos`.`telefones` (
  `id` INT NOT NULL,
  `numero` VARCHAR(25) NOT NULL,
  `contatos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_telefones_contatos1_idx` (`contatos_id` ASC),
  CONSTRAINT `fk_telefones_contatos1`
    FOREIGN KEY (`contatos_id`)
    REFERENCES `contatos`.`contatos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `contatos`.`amizades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contatos`.`amizades` (
  `id` INT NOT NULL,
  `usuarios1_id` INT NOT NULL,
  `usuarios2_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_amizades_usuarios1_idx` (`usuarios1_id` ASC),
  INDEX `fk_amizades_usuarios2_idx` (`usuarios2_id` ASC),
  CONSTRAINT `fk_amizades_usuarios1`
    FOREIGN KEY (`usuarios1_id`)
    REFERENCES `contatos`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_amizades_usuarios2`
    FOREIGN KEY (`usuarios2_id`)
    REFERENCES `contatos`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
